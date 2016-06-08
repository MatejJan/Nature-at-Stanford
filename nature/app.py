from flask import Flask
app = Flask(__name__, static_url_path='')

@app.route('/')
def home():
	return app.send_static_file('home.html')

@app.route('/projects/<int:project_id>')
def project_card(project_id):
	return app.send_static_file('projects/project-card-%d.html' % project_id)

if __name__ == '__main__':
	app.run(debug=True)