const { google } = require('googleapis');
const { convertArrToObj } = require('../utils');

const spreadsheetId = '1e2GXQAvCEeJ-iUtQzTCSI_US-6Hh1K_22rYbbokyzj0';
const sheetClient = google.auth.getClient({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const apiClient = async () => google.sheets({ version: 'v4', auth: await sheetClient });

const getRows = async function (options) {

  const api = await apiClient();

  const response = await api.spreadsheets.values.get(options);
  const { values } = response.data;

  return convertArrToObj(values);
};

const getSpeakers = async function () {
  return getRows({ spreadsheetId, range: 'Speakers!A:G' });
};

const getEvents = async function () {
  return getRows({ spreadsheetId, range: 'Events!A:G' });
};

module.exports = {
  getRows,
  getEvents,
  getSpeakers
};
