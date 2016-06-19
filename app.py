from flask import Flask, render_template
app = Flask(__name__, static_url_path='')

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/app.cgi/projects/<int:project_id>')
@app.route('/projects/<int:project_id>')
def project_card(project_id):
	return render_template('projects/project-card-%d.html' % project_id)

if __name__ == '__main__':
	app.run(debug=True)