import { utils } from '../dist/index';
import { PARAMETER_PRODUCT, PARAMETER_PRODUCT_RESULT } from './utilTestData';

// mapProductParameters.test.ts
import { describe, it, expect } from 'vitest';

const makeLangData = (langId, name) => ({
    langId,
    parameterName: name,
    parameterDescription: '',
    parameterShopsData: [],
});

const makeValueLangData = (langId, valueName) => ({
    langId,
    parameterValueName: valueName,
    parameterValueDescription: '',
    parameterValueShopsData: [],
});

const makeParam = (id, name, values, langId = 'pol') => ({
    parameterId: id,
    parameterType: 'parameter',
    parameterDescriptionsLangData: [makeLangData(langId, name)],
    parameterValues: values.map((v) => ({
        parameterValueId: v.id,
        parameterValueDescriptionsLangData: [makeValueLangData(langId, v.name)],
    })),
});

describe('mapProductParameters', () => {
    it('returns [] when productParameters is undefined', () => {
        expect(utils.mapProductParameters({})).toEqual([]);
    });

    it('returns [] when productParameters is empty', () => {
        expect(utils.mapProductParameters({ productParameters: [] })).toEqual([]);
    });

    it('skips parameters with null parameterValues', () => {
        const product = {
            productParameters: [
                { ...makeParam(1, 'Color', [{ id: 10, name: 'Red' }]), parameterValues: null },
            ],
        };
        expect(utils.mapProductParameters(product)).toEqual([]);
    });

    it('skips parameters with empty parameterValues', () => {
        const product = {
            productParameters: [{ ...makeParam(1, 'Color', []), parameterValues: [] }],
        };
        expect(utils.mapProductParameters(product)).toEqual([]);
    });

    it('maps a single parameter with values using default lang (pol)', () => {
        const product = {
            productParameters: [makeParam(1, 'Color', [{ id: 10, name: 'Red' }])],
        };
        expect(utils.mapProductParameters(product)).toEqual([
            { id: 1, name: 'Color', values: [{ valueId: 10, value: 'Red' }] },
        ]);
    });

    it('maps multiple parameters and multiple values', () => {
        const product = {
            productParameters: [
                makeParam(1, 'Color', [{ id: 10, name: 'Red' }, { id: 11, name: 'Blue' }]),
                makeParam(2, 'Size', [{ id: 20, name: 'M' }, { id: 21, name: 'L' }]),
            ],
        };
        expect(utils.mapProductParameters(product)).toEqual([
            { id: 1, name: 'Color', values: [{ valueId: 10, value: 'Red' }, { valueId: 11, value: 'Blue' }] },
            { id: 2, name: 'Size', values: [{ valueId: 20, value: 'M' }, { valueId: 21, value: 'L' }] },
        ]);
    });

    it('uses provided langId instead of default', () => {
        const product = {
            productParameters: [makeParam(1, 'Kolor', [{ id: 10, name: 'Czerwony' }], 'eng')],
        };
        expect(utils.mapProductParameters(product, 'eng')).toEqual([
            { id: 1, name: 'Kolor', values: [{ valueId: 10, value: 'Czerwony' }] },
        ]);
    });

    it('falls back to empty string when langId has no matching entry', () => {
        const product = {
            productParameters: [makeParam(1, 'Color', [{ id: 10, name: 'Red' }], 'pol')],
        };
        expect(utils.mapProductParameters(product, 'deu')).toEqual([
            { id: 1, name: '', values: [{ valueId: 10, value: '' }] },
        ]);
    });

    expect(utils.mapProductParameters(PARAMETER_PRODUCT)).toEqual(PARAMETER_PRODUCT_RESULT)
});