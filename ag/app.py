from flask import Flask, send_from_directory, jsonify

app = Flask(__name__)

@app.route('D:/Hackout shi - Copy/ag/static/data.json', methods=['GET'])
def get_json_data():
    return send_from_directory('static', 'data.json')

if __name__ == '__main__':
    app.run(debug=True)

