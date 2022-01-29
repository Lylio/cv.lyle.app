node {
	def app
	def image = 'registry.hub.docker.com/lylio/lylio-portfolio'
	def branch = 'main'

	try {
		stage('Clone repository') {
	    	git branch: branch,
	        	credentialsId: 'Lylio-GitHub',
	        	url: 'https://github.com/Lylio/portfolio.git'
	    }
	    
	    stage('Build Image') {
			app = docker.build image
	    }

	    stage('Push') {
	    	docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_id') {
				app.push("${env.BUILD_NUMBER}")
				app.push("latest")
	        }
	    }
	} catch (e) {
		echo 'Error occurred during build process!'
		echo e.toString()
		currentBuild.result = 'FAILURE'
	}
}
