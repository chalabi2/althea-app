import { getSafeVals } from 'pages/staking/utils/allUserValidatorInfo';
import fetch from 'node-fetch';

jest.mock('node-fetch');

const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('getSafeVals', () => {
    it('should segregate jailed and not jailed addresses correctly', async () => {
        const mockResponse = {
            validators: [
                {
                    jailed: true,
                    operator_address: 'jailed_address_1'
                },
                {
                    jailed: false,
                    operator_address: 'not_jailed_address_1'
                }
            ]
        };

        mockedFetch.mockResolvedValueOnce({
            json: async () => mockResponse
        } as any);

        const result = await getSafeVals('http://mocknodeaddress');

        expect(result.jailed).toEqual(['jailed_address_1']);
        expect(result.notJailed).toEqual(['not_jailed_address_1']);
    });
});
