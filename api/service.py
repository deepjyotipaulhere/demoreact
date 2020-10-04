from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app=Flask(__name__)
CORS(app)


@app.route("/index")
def index():
    d={
        'username':'Deepjyoti',
        'pwd':'1234'
    }
    return jsonify(d)

@app.route("/register",methods=['POST'])
def register():
    data=request.get_json()
    con=MongoClient(host='localhost')
    db=con.demo.data
    db.insert_one({
        'name': data['username']
    })
    return "Hello "+data['username']

if __name__=='__main__':
    app.run(debug=True)