# Araucaria Araucana - Responsive Layout Practice

This project is a responsive layout practice for beginners, based on the [Four Card Feature Section Challenge](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK) from Frontend Mentor.

## Repository

The project repository can be found on GitHub at [Anomander-R/araucaria-araucana](https://github.com/Anomander-R/araucaria-araucana.git).

## Design

The design for this project can be viewed on Figma at [this link](https://www.figma.com/file/nO7y7XEQK9CMZr37KpdBbX/araucaria-araucana-responsive-layout-practice?type=design&node-id=0-1&mode=design&t=wczTJvb7AIgtoQHK-0).

## Project Brief

The challenge is to build a feature section that closely matches the provided design. You are free to use any tools to complete this challenge.

The users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- Download the starter code and go through the README.md file for more details about the project.
- Refer to the style-guide.md file for information on colors, fonts, etc.

## Assets

The following assets are provided:

- JPEG design files for mobile & desktop layouts.
- Style guide for fonts, colors, etc. (Style.Guide.md).
- Optimized image assets located in the /public/ directory.
- README file to help you get started.

## Setup

### Installing React

To install React, run the following command:

```sh
npm create vite@latest ./ -- --template react-swc
```

### Starting the Project

This project uses SCSS. To install SCSS support, run:

```sh
npm install -D sass
```

The project involves:

1. Creating all components:
   - FourCardsChallenge.jsx & fourcardschallenge.scss
   - HeaderBar.jsx & headerbar.scss
   - SimpleCard.jsx & simplecard.scss
2. Creating an array of cards in FourCardsChallenge to feed SimpleCard components.
3. Building the HeaderBar component.
4. Building the SimpleCard component.

## Conclusion

All CSS is written in three separate files: fourcardschallenge.scss, headerbar.scss, and simplecard.scss. 

The app.scss document is empty because all necessary code for the app is contained in FourCardsChallenge.jsx. If needed, a completely different Challenge can be mounted instead of the Four Cards Challenge.