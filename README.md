# Portfolio Website - Harsh R Bagtharia

A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark/light mode toggle and data-driven content.

## Features

- 🌓 **Dark/Light Mode**: Toggle between light and dark themes with persistent storage
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop views
- 🎨 **Modern UI**: Clean design with green accent colors and smooth animations
- 📊 **Data-Driven**: All content loaded from `data.json` for easy updates
- 🚀 **Performance**: Built with React and optimized for fast loading
- 🎯 **Smooth Navigation**: Smooth scroll to sections with fixed navbar

## Structure

```
/public
  ├── data.json           # Portfolio data (edit this to update content)
  └── urbanloop.svg       # App logo placeholder

/src
  ├── app
  │   ├── components
  │   │   ├── ThemeProvider.tsx   # Dark/Light mode context
  │   │   ├── Navbar.tsx          # Navigation with theme toggle
  │   │   ├── Hero.tsx            # Hero section
  │   │   ├── About.tsx           # About section
  │   │   ├── Projects.tsx        # Projects showcase with filters
  │   │   ├── Resume.tsx          # Education, skills, courses
  │   │   ├── Contact.tsx         # Contact form and social links
  │   │   └── Footer.tsx          # Footer with social icons
  │   └── App.tsx                 # Main app component
  └── styles
      └── theme.css               # Tailwind theme configuration
```

## Updating Content

To update your portfolio content, edit `/public/data.json`:

### Sections Available:
- **nav**: Navigation menu
- **home**: Hero section content
- **about**: About me section
- **personalInfo**: Personal details
- **skills**: Technical and soft skills
- **education**: Educational background
- **courses**: Courses and certifications
- **projects**: Portfolio projects (supports categories and filtering)
- **socials**: Social media links
- **contact**: Contact information

### Adding Projects:

```json
{
  "title": "Project Name",
  "category": "Category Name",
  "timePeriod": "2024",
  "role": "Your Role",
  "description": "Project description",
  "link": "https://project-url.com",
  "image": "https://image-url.com/image.jpg",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

## Project Categories

Projects are automatically grouped by category with filter buttons:
- Developed
- Open Source Contribution
- App Contribution
- Event
- Hackathon
- Media
- Content Creation
- Competition

## Color Scheme

The portfolio uses a green-based color scheme with the following features:
- Primary Green: #10b981 (Tailwind green-600)
- Light mode: White backgrounds with green accents
- Dark mode: Dark gray backgrounds with green accents
- Smooth transitions between themes

## Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

Built by Harsh R Bagtharia using React, Tailwind CSS, and Lucide React icons.
