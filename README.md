# 📋 Users Task Manager

A modern Angular application for managing tasks across multiple users. This application demonstrates core Angular concepts including component composition, services, data binding, and local storage persistence.

## 🚀 Features

- **User Management**: Browse and select from a list of users with profile pictures
- **Task Management**: Create, view, and delete tasks for each user
- **Data Persistence**: Tasks are automatically saved to local storage
- **Responsive Design**: Clean and modern UI that works across devices
- **Component Architecture**: Well-structured Angular components following best practices

## 🛠️ Technology Stack

- **Framework**: Angular 18.0.0
- **Language**: TypeScript 5.4.2
- **Styling**: CSS3
- **Build Tool**: Angular CLI 18.0.0
- **Testing**: Jasmine & Karma
- **Data Storage**: Local Storage

## 📦 Project Structure

```
src/
├── app/
│   ├── header/                 # Header component with app title
│   ├── user/                   # User selection component
│   ├── tasks/                  # Task management components
│   │   ├── new-task/          # New task creation form
│   │   └── tasks.service.ts   # Task data service
│   ├── task/                   # Individual task component
│   ├── shared/
│   │   └── card/              # Reusable card component
│   ├── dummy-users.ts         # Sample user data
│   └── app.component.ts       # Root component
└── assets/
    ├── users/                 # User profile images
    └── *.png                  # App icons and logos
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)
- Angular CLI (optional, for additional commands)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd users-task-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### Available Scripts

| Command         | Description                            |
| --------------- | -------------------------------------- |
| `npm start`     | Start development server               |
| `npm run build` | Build for production                   |
| `npm run watch` | Build with watch mode                  |
| `npm test`      | Run unit tests                         |
| `ng serve`      | Start development server (alternative) |

## 🎯 Usage

1. **Select a User**: Click on any user from the sidebar to view their tasks
2. **View Tasks**: See all tasks assigned to the selected user
3. **Add New Task**: Click "Add Task" to create a new task with:
   - Title
   - Summary/Description
   - Due Date
4. **Complete Tasks**: Click "Complete" to remove finished tasks
5. **Data Persistence**: All tasks are automatically saved to local storage

## 🏗️ Architecture

### Components

- **AppComponent**: Root component managing user selection and overall state
- **HeaderComponent**: Application header with title and logo
- **UserComponent**: Individual user card for selection
- **TasksComponent**: Task list container and management
- **TaskComponent**: Individual task display and actions
- **NewTaskComponent**: Form for creating new tasks
- **CardComponent**: Reusable UI component for consistent styling

### Services

- **TasksService**: Handles all task-related operations including CRUD operations and local storage persistence

### Models

- **ITask**: Interface defining task structure (id, userId, title, summary, dueDate)
- **INewTask**: Interface for creating new tasks (without id and userId)
- **User**: Type definition for user objects

## 🎨 Styling

The application uses a modern, clean design with:

- Card-based layout for better visual organization
- Responsive grid system
- Consistent color scheme and typography
- Smooth hover effects
- Mobile-friendly interface

## 💾 Data Management

- **Local Storage**: Tasks persist between browser sessions
- **In-Memory State**: User data and current selections managed in component state
- **Service Layer**: Centralized task management through TasksService

## 🔧 Development

### Adding New Features

1. **New Components**: Use Angular CLI to generate components

   ```bash
   ng generate component component-name
   ```

2. **New Services**: Generate services for data management

   ```bash
   ng generate service service-name
   ```

3. **Interfaces**: Add TypeScript interfaces in the appropriate model files

### Code Style

- Follow Angular style guide conventions
- Use TypeScript strict mode
- Implement proper component lifecycle hooks
- Maintain separation of concerns

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

This will execute unit tests via Jasmine and Karma with real-time feedback.

## 📈 Building for Production

Create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for deployment.

## 🤝 Contributing

This is a learning project demonstrating Angular fundamentals. Feel free to explore the code and experiment with new features!

## 📄 License

This project is for educational purposes and learning Angular development.

---

Built with ❤️ using Angular
