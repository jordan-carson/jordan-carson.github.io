import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jordan-carson/jordan-carson.github.io.git', // Update to point to your repository
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