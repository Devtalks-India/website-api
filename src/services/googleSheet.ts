import  { google, sheets_v4 } from 'googleapis';
import { convertArrToObj } from '../utils';

export type ISheetData = {
  values: string[][]
};
const spreadsheetId = '1e2GXQAvCEeJ-iUtQzTCSI_US-6Hh1K_22rYbbokyzj0';

export const sheetClient = google.auth.getClient({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const apiClient = async () => google.sheets({ version: 'v4', auth: await sheetClient });

export const getRows = async function (options: sheets_v4.Params$Resource$Spreadsheets$Values$Get) {

  const api = await apiClient();

  const response = await api.spreadsheets.values.get(options);
  const { values } = response.data as ISheetData;

  return convertArrToObj(values);
};

export const getSheet = async (range: string) => {
  return getRows({ spreadsheetId, range });
}

export const appendSheet = async (range: string, rows: ISheetData['values']) => {
  const api = await apiClient();
  return api.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'raw',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: rows
    }
  });
};
