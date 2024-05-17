# Purple Martins Monitoring App

## Introduction

Welcome to the Purple Martins Monitoring App repository! This application is designed to facilitate the logging of information related to Purple Martins by users, and streamline the process of monitoring and data collection for administrators. The app aims to support conservation efforts by making it easier to track and manage data on Purple Martin populations.

## Features

- **User Accounts:** Users can create accounts and log in to access the app's features.
- **Data Logging:** Users can log various types of information including sightings, nest status, and other relevant data.
- **Admin Dashboard:** Administrators have access to a dashboard where they can view, manage, and analyze the data submitted by users and create forms for the collection of such data
- **Reports:** Generate reports to summarize data for specific periods or regions.

## Installation

To run this app locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anarchist1984/GSMSTPurpleMartin
   cd GSMSTPurpleMartin
   ```

2. **Install dependencies:**
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Set up the database:**
   Ensure that you have a firebase env file set up with this configuration 
   ```bash
   const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
```


5. **Start the application:**
   ```bash
   npm run dev
   ```

6. **Access the application:**
   Open your browser and go to `http://localhost:3000`.

## Usage

### User Guide

1. **Sign Up / Login:**
   Create a new account or log in with your existing credentials.
   
2. **Follow this**
   Follow this for a more structured walkthrough:
   https://guidejar.com/guides/a91b5d23-bea5-4dc7-9730-17acdd9f60f1

### Admin Guide / Team Leader

1. **Admin Dashboard:**
   Access the admin or team leader dashboard to view all user-submitted data.

2. **Admin**
   Administrators can filter, sort, and export data for further analysis.

3. **Team Leader**
   Team leader's can only manage data for the team they are assigned to 

4. **Walkthrough**
    https://guidejar.com/guides/9c9adb58-0d9b-49b3-abcf-8d6308a22557

## Contributing

We welcome contributions to the Purple Martins Monitoring App! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to all the contributors (Valentina Munoz-Baccadre and Pritika Yadav) who have helped in developing this application.
- Thanks to the Purple Martin Conservation Association for their ongoing efforts in conserving Purple Martins.

---

If you have any questions or need further assistance, please feel free to open an issue in this repository.

Happy Logging!