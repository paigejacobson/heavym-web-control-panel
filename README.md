# HeavyM Web Control Panel

This project lets you control [HeavyM](https://heavym.net) projection mapping effects and sequences via a browser-based control panel. Opening the controls up to the web allow you to interface other devices to control HeavyM, like a Raspberry Pi or Arduino.

#### Installation & Running
- Start OSC in HeavyM by navigating to `Controls` and clicking `OSC Control`
- Start the server by running `npm i` to get all the required packages
- Run `npm start` to start the server. You may have to install `http-server` globally for it to function - you can do this by running `npm i -g http-server`

#### General Notes
This version of Riot that we're using does not include the in-browser compiler. You'll have to compile to JS if you make a change to a `.tag` file. 