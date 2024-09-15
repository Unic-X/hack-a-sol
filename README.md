# Cricket Batsman Performance Analysis System

## Overview

This project aims to develop a comprehensive system for analyzing and predicting the performance of a cricket batsman against a specific opponent. By leveraging historical match data, the system evaluates a player's performance in two distinct matches—one where the player’s team emerged victorious and another where the team lost. The objective is to uncover patterns and insights that drive performance, and to build a predictive model that forecasts the player's future performance. This system combines data scraping, performance analysis, and predictive modeling to deliver actionable insights for cricket enthusiasts and analysts.

## Objectives

1. **Detailed Performance Analysis**:
    - Analyze the player's performance metrics such as runs scored, strike rate, and other relevant statistics from two contrasting matches against the same team. 
    - Explore how these metrics varied between a winning and a losing game to identify factors that influenced the player's impact on the match outcomes.

2. **Predictive Model Development**:
    - Construct a model to predict the player's performance in an upcoming match against the same opponent. 
    - Incorporate various scenarios and historical data to provide a well-rounded forecast, explaining the basis of predictions and potential influencing factors.

## Features

- **Web Scraping**: Collect player performance data from `cricbuzz.com` into the `MongoDB` database .
- **Performance Metrics Analysis**: Evaluate key metrics to understand player performance in different match outcomes.
- **Predictive Modeling**: Use historical data to forecast future performance using `catboost` model.

## Technologies Used

- **Python**: Core programming language.
- **BeautifulSoup & Requests**: For web scraping the website and request to post into the `mongoDB` site.
- **Pandas & NumPy**: Data manipulation and analysis in the (in `ML` part only).
- **Catboost**: For building predictive model.
- **Matplotlib & Seaborn**: Data visualization (in `ML` part only).
- **AWS EC2** : For deploying the `express.js` server.
- **Vercel** : Used for deploying the frontend `react.js` client.
- **MongoDB** : Used for storing the intersection of dataset we got and cricbuzz.com website.

## Dataset

The dataset used for this analysis is sourced from [Kaggle](https://www.kaggle.com/datasets/kalaikumarr/cricket-series-ranking/data).

## Contributing

Contributions are welcome! Please open issues, submit pull requests, or provide feedback.

## License

This project is licensed under the WTFPL License. See the [LICENSE](LICENSE) file for details.

