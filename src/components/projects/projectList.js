const projectList = [
  {
    project_name: 'Upasthiti',
    project_subname: 'IRIS based attendance system for Ministry of Rural Development (SIH ’22)',
    technologies: 'Flutter, Tensorflow, Firebase, Flask, Amazon AWS, Docker, Kubernetes',
    description: [
      'Developed a mobile application using flutter that records attendance using IRIS recognition system',
      'Used OpenCV for extracting the iris from image provided by the user and later preprocessing the extracted part for model training and recognition',
      'Used firebase as a database for storing the user details and IRIS images',
    ],
    link: 'https://www.google.com',
  },
  {
    project_name: 'Ikshana',
    project_subname:
      'Self Care Website for women and the LGBTQ community',
    technologies: 'Firebase, Allen API, Google Translate API, Spotify API, JavaScript, HTML, CSS',
    description: [
      ' web application that provides self help tools for women to track periods and pregnancy, meditate, medication reminders and know better of where they lie on the gender spectrum',
      'Used HTML, CSS and JavaScript for developing the frontend of the web application.',
      'Integrated the Google Translate API for multilingual support and AlanAPI to provide voice assistance to the user.',
    ],
    link: 'https://www.google.com',
  },
  {
    project_name: 'Study Zone',
    project_subname:
      'An application/brower extension that checks if a given link is a phishing link using Machine Learning model',
    technologies: 'PyScript, Spotify API, JavaScript, HTML, CSS',
    description: [
      'Built a web application that helps students to focus on their work with tools like pomodoro ,wiki search, notepad and a soothing music player embedded into the application.',
    ],
    link: 'https://www.google.com',
  },
  // {
  //   project_name: 'RL songs recommender',
  //   project_subname:
  //     'A reinforcement learning model that recommends you personalized songs based on the songs you listened to recently',
  //   technologies: 'Reinforcement Learning, Gym AI, Tensorflow',
  //   description: [
  //     'Takes advantage of reinforcement learning to predict user interests',
  //     'Takes in user input of like and dislike as a reward system',
  //     'Trained on a subset of the Million Songs dataset',
  //     'Used Gym AI to create an environment for the rl agent to function in and tensorflow for preprocessing of data and model training',
  //   ],
  // },
  // {
  //   project_name: 'OCR',
  //   project_subname:
  //     'A mobile application that recognizes code from an image, identifies the programming language and then creates a file with the code\n and appropriate file extension',
  //   technologies: 'Natural Language Processing, BERT, Tensorflow, openCV',
  //   description: [
  //     'Created a NLP model that takes advantage of the BERT model to recognize the programming language that the code was written in',
  //     'Trained the BERT model on the "GitHub snippets" database extensively',
  //     'Implemented an OCR with the help of tesseract-ocr that takes in an image preprocessed by scripts writting using openCV',
  //     'Developed a flutter application to support the backend model by capturing images and sending them to a backend server hosted on AWS',
  //   ],
  // },
];

export default projectList;
