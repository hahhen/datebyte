# Warning

This is *not* my code. The original owner made it private and then public again, so it shows up as being mine since I was the first one who forked it. The original unmodified version is available at https://github.com/0xneobyte/datebyte.

# DateByte - A Techie Way to Ask Her Out 💻💘

<div align="left">

![GitHub release (latest by date)](https://img.shields.io/github/v/release/tharushkadinujaya05/datebyte)
![GitHub all releases](https://img.shields.io/github/downloads/tharushkadinujaya05/obsiai/datebyte)
![GitHub](https://img.shields.io/github/license/tharushkadinujaya05/datebyte)
![Screen Recording Nov 17 2024](https://github.com/user-attachments/assets/707f67f6-c38a-41ae-99e8-c34cfbede8fd)


Are you a tech guy? Want to ask her out in a way she’ll never forget? DateByte lets you send the cutest, tech-inspired date invite—because who says coding can’t be romantic? 🤨
</div>

## 📑 Table of Contents

- [💌 How It Works](#-how-it-works)
- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [📧 Email Setup](#-email-setup)
- [🌐 Vercel Deployment](#-vercel-deployment)
- [🎨 Customization](#-customization)
- [📄 License](#-license)
- [💖 Credits](#-credits)
- [🤝 Contributing](#-contributing)
- [🔧 Troubleshooting](#-troubleshooting)
- [🐛 Bug Reports](#-bug-reports)
- [💖 Support](#-support)

## 💌 How It Works

1. Send her the app link
2. She follows the interactive steps:
   - Initial proposal question
   - Date and time selection
   - Food preferences
   - Movie selection
   - Excitement level
3. When she completes it:
   - You'll receive an email with her choices
   - The response is saved as JSON
   - You can view it in the admin page

## ✨ Features

- **Interactive Steps**: Guide your date through a series of fun and engaging steps
- **Date and Time Selection**: Allow your date to choose a convenient time
- **Food and Movie Choices**: Let your date select their favorite food and movie
- **Excitement Rating**: Gauge your date's excitement level
- **Confetti Animation**: Celebrate with a confetti animation when your date accepts

## 🚀 Installation

To get started with the Date Proposal App, follow these steps:

1. Clone the repository:
```sh
git clone https://github.com/tharushkadinujaya05/datebyte.git
```

2. Navigate to the project directory:
```sh
cd datebyte
```

3. Install the dependencies:
```sh
npm install
```

4. Run the development server:
```sh
npm run dev
```

Open your browser and navigate to http://localhost:3000 to see the app in action.

## 📧 Email Setup

To enable email notifications:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and "Other"
   - Copy the generated password
4. Update your `.env.local` file with:
```env
EMAIL_USER=your.gmail@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password
```

## 🌐 Vercel Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add Environment Variables in Vercel project settings:
```env
EMAIL_USER=your.gmail@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password
```

## 🎨 Customization

You can customize:
- Food options in the `food` array
- Movie choices in the `movies` array
- Colors in `tailwind.config.ts`
- Email template in `app/api/send-response/route.ts`
- Animations and transitions in components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Credits

- Cute gifs from Tenor
- UI components from shadcn/ui
- Icons from Lucide
- Animations from Framer Motion

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 🔧 Troubleshooting

If emails aren't working:
1. Check Vercel environment variables are set correctly
2. Make sure Gmail App Password is correct
3. Verify 2-Step Verification is enabled
4. Check deployment logs in Vercel dashboard

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Expected behavior
- Actual behavior
- Steps to reproduce

## 💖 Support

If you find this project helpful:

- ⭐ Star the repository
- 🐛 Report issues on GitHub
- 💡 Submit feature requests

<p>
  <a href="https://www.buymeacoffee.com/neo_3xd">
    <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="150" alt="neo_3xd" />
  </a>
</p>

<br><br>

---

<div align="center">

**Made with ❤️ by [Neo](https://github.com/tharushkadinujaya05)**

</div>
