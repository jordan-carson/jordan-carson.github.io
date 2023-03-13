import { publish } from 'gh-pages';



function deploy(branch) {
    console.log("Deploying to branch %s", branch)
    return publish(
        'build', // path to public directory
        {
            branch: branch,
            repo: 'git@github.com:jordan-carson/jordan-carson.github.io.git', // Update to point to your repository
            user: {
                name: 'Jordan Carson', // update to use your name
                email: 'jordanlouiscarson@gmail.com' // Update to use your email
            },
            dotfiles: true
        },
        () => {
            console.log('Deploy Complete!');
        }
    );
}

deploy("gh-pages");



