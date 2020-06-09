# DevRadar-Mobile

This is the mobile part of the **DevRadar** project developed by [**_Rocketseat_**](https://rocketseat.com.br/), a Brazilian company that teaches Node.JS, ReactJS and React Native.
This is a project where I could learn many professional techniques that is used in "the real world".

## About the project

- The **DevRadar** is an application where you can search for developers within 10km around you.
- In the app you can search the developer typing the technology that you are interested in and it will show to yuo the develepers registered with this technology whitin 10km around you.
- You can also click in some developer and then go to his/her GitHub.

## The mobile

The mobile was developed with [**_React Native_**](https://reactnative.dev/) using [**_Expo_**](https://expo.io/) and **Xcode** as a simulator.
[**_React Navigation_**](https://reactnavigation.org/) was used to handle the routes in this application and [**_socket.io_**](https://socket.io/) to connect the requests from the mobile to the web in real-time.

## Getting started

1.  Prerequisites

- npm

      npm install npm@latest -g

2. Installation

- Clone the repo

      git clone https://github.com/euguilhermegirardi/DevRadar-Mobile.git

3. Install NPM packages

       npm install

4. Run the application

       npm run start
    
5. In localhost you can open-up the project by clickin on 'Run on...' iOS, Android or in the browser.

Obs. Attention on this part. You may have to change the 'baseURL' in the file 'src/services/api.js' if the app doesn't run at first.
Check the CONNECTION in the localhost in 'exp://...' on the left.

## Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a pull request

## License

![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
