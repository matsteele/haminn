from __future__ import print_function

#hack
import sys
sys.path.insert(1, '/Library/Python/2.7/site-packages')

import httplib2
import os

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

# If modifying these scopes, delete your previously saved credentials
# at ~/.credentials/sheets.googleapis.com-python-quickstart.json
SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Google Sheets API Python Quickstart'

import json

def get_credentials():
    """Gets valid user credentials from storage.

    If nothing has been stored, or if the stored credentials are invalid,
    the OAuth2 flow is completed to obtain the new credentials.

    Returns:
        Credentials, the obtained credential.
    """
    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir,
                                   'sheets.googleapis.com-python-quickstart.json')

    store = Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        if flags:
            credentials = tools.run_flow(flow, store, flags)
        else: # Needed only for compatibility with Python 2.6
            credentials = tools.run(flow, store)
        print('Storing credentials to ' + credential_path)
    return credentials

def main():
    """Shows basic usage of the Sheets API.

    Creates a Sheets API service object and prints the names and majors of
    students in a sample spreadsheet:
    https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
    """
    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    discoveryUrl = ('https://sheets.googleapis.com/$discovery/rest?'
                    'version=v4')
    service = discovery.build('sheets', 'v4', http=http,
                              discoveryServiceUrl=discoveryUrl)

    spreadsheetId = '13-jjLSP39YzTxdIgd_roaqFQvJHrsDzY9ezVXEVUQlI'
    rangeName = '2017a!ND3:AFU21'
    result = service.spreadsheets().values().get(
        spreadsheetId=spreadsheetId, range=rangeName).execute()
    values = result.get('values', [])

    values = map(None, *values)


    datesJson = json.dumps(values, indent=2)

    proposedDate = 42938

    numbDays = 2

    JulyFirst = 42917

    dateDiff = proposedDate - JulyFirst

    dayData = []

    roomAvail = {
    "oneOne" : 0,
    "oneTwo" : 0,
    "twoTwo" : 0,
    "threeTwo" : 0,
    "fourOne" : 0,
    "fourTwoL" : 0,
    "fourTwoU" : 0,
    "fourThree" : 0
    }

    # print (values[dateDiff*2+1])

    for i in range(numbDays):
        dayData.append((values[(dateDiff+i)*2+1]))
        
        roomData = {
        "oneOne" : dayData[i][6],
        "oneTwo" : dayData[i][9],
        "twoTwo" : dayData[i][12],
        "threeTwo" : dayData[i][14],
        "fourOne" : dayData[i][15],
        "fourTwoL" : dayData[i][16],
        "fourTwoU" : dayData[i][17],
        "fourThree" : dayData[i][18]
        }


        for key, value in roomData.iteritems():

            print(roomData[key])
    
            if str(roomData[key]):
                roomAvail[key] = roomAvail[key] + 1
                print (roomAvail[key])


            
            # else:
            #     roomAvail[key]


   # print(dayData, len(dayData))
    print(roomAvail['oneOne'],roomData['oneOne'],roomAvail['oneTwo'],roomData['oneTwo'],roomAvail['threeTwo'],roomData['threeTwo'])
    print (roomAvail)
    #True and False 






    # if not values:
    #     print('No data found.')
    # else:
    #     print('Name, Major:')
    #     for row in values:
    #         # Print columns A and E, which correspond to indices 0 and 4.
    #         print('%s, %s' % (row[0], row[4]))



if __name__ == '__main__':
    main()