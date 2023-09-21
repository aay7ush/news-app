# News App

Welcome to the News App! The app allows users to explore trending news articles all around the world.

## Screenshots

![](/public/screenshot.png)

## Live Site

Check out the live site [here](https://f1tness-app.netlify.app/).

## Features

1. **Search News**: Users can search for news articles using keywords. The app queries the MediaStack API for relevant news articles based on the search query.

2. **Read More**: For each news article displayed in the search results, users can click on a "Read More" button to view detailed information about the article.

3. **Filter by Category**: Users can filter news articles by category, making it easy to find articles related to specific topics of interest.

4. **Dark Theme**: The app provides a dark theme option for users who prefer a darker color scheme for better readability in low-light conditions.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/news-app.git`
2. Navigate to the project directory: `cd news-app`
3. Install the dependencies: `npm install`
4. Create a `.env.local` file and add your `MEDIASTACK_API_KEY` and `STEPZEN_API_KEY`
5. Start the development server: `npm run dev`
6. Open your web browser and visit `http://localhost:3000` (or the specified port)

## Technologies Used

- **Next.js**: The app is built using Next.js, a React framework for server-rendered applications.

- **TypeScript**: TypeScript is used for static typing, improving code quality and developer productivity.

- **Tailwind CSS**: Tailwind CSS is used for styling the app, making it responsive and visually appealing.

- **StepZen**: StepZen is used to create a unified GraphQL API that fetches data from various sources, including the MediaStack API.

- **MediaStack API**: MediaStack provides access to news articles and is used to fetch news data for the app.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
