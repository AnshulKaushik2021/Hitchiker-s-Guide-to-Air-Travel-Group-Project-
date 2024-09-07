from flask import Flask, request

import mysql.connector
import json

import random

secrets = json.load(open('../secrets.json'))

db_connection = mysql.connector.connect(
    host = secrets["host"],
    user = secrets["user"],
    password = secrets["password"],
    database = "HitchhikersFlights"
)

app: Flask = Flask(__name__)

@app.route("/")
def main():
    return "<p>Hello world!</p>"

@app.route("/api/aircraft", methods = ["GET"])
def queryAircraft():
    df_cursor = db_connection.cursor()
    
    # Execute query
    df_cursor.execute("""
        SELECT
            N_Number
        FROM
            Aircraft;
    """)
    result = df_cursor.fetchall()
    df_cursor.close()

    return result

@app.route("/api/airports", methods = ["GET"])
def queryAirports():
    df_cursor = db_connection.cursor()

    # Execute query
    df_cursor.execute("""
        SELECT
            ID, Name
        FROM
            Airports;
    """)
    result = df_cursor.fetchall()
    df_cursor.close()

    return result

@app.route("/api/best_flights/<airport1>/<airport2>/<date>", methods = ["GET"])
def queryBestFlights(airport1, airport2, date):
    # TODO: Update Schedules.TimesSearched as well

    df_cursor = db_connection.cursor()

    query = "TODO"

    # Execute query
    df_cursor.execute(
        query, 
        (airport1, airport2, date)
    )
    result = df_cursor.fetchall()
    df_cursor.close()

@app.route("/api/best_of_aircraft/<aircraft>", methods = ["GET"])
def queryBestAircraft(aircraft: str):
    df_cursor = db_connection.cursor()

    query = "TODO"
    
    # Execute query
    df_cursor.execute(
        query, 
        (airport)
    )
    result = df_cursor.fetchall()
    df_cursor.close()

@app.route("/api/add_bookmark/<user>/<airporttfrom>/<airportto>/<flightnumber>", methods = ["GET"])
def queryAddBookmark(user, airportfrom, airportto, flightnumber):
    return "TODO"

@app.route("/login", methods = ["POST"])
def loginUser():
    data_json = request.get_json()

    user_email = data_json['email']
    user_password = data_json['password']

    df_cursor = db_connection.cursor()

    query = """
        SELECT
            Email, Password
        FROM
            Users
        WHERE
            Email = %s AND Password = %s;
    """
    params = (user_email, user_password)

    df_cursor.execute(query, params)
    result = df_cursor.fetchall()
    df_cursor.close()

    if len(result) == 0:
        return "User not found", 404
    
    new_token = random.getrandbits(16)
    df_cursor = db_connection.cursor()

    query = """
        UPDATE
            Users
        SET
            LatestToken = %s
        WHERE
            Email = %s;
    """
    df_cursor.execute(query, (new_token, user_email))
    db_connection.commit()

    df_cursor.close()

    response = app.response_class(
        response = json.dumps({"token":new_token}),
        mimetype = "application/json"
    )

    return response