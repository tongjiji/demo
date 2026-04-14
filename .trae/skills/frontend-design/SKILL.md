---
name: "frontend-design"
description: "Creates and optimizes frontend interface designs including layouts, styles, and interactive effects. Invoke when user asks for UI design help or needs to implement frontend interfaces."
---

# Frontend Design Skill

This skill helps with frontend interface design and implementation.

## When to Use
- User needs to create UI layouts based on design specifications
- User wants to implement responsive designs
- User needs help with CSS styling and animations
- User wants to optimize frontend performance
- User needs to implement interactive UI components

## Key Features
1. **Layout Design**: Create responsive layouts using flexbox, grid, or other CSS techniques
2. **Styling**: Implement custom styles using Tailwind CSS or plain CSS
3. **Interactivity**: Add animations, transitions, and interactive effects
4. **Performance**: Optimize frontend performance and loading times
5. **Accessibility**: Ensure UI components are accessible and follow best practices

## Example Usage
```javascript
// Example: Create a responsive layout
const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4">Sidebar</aside>
      <main className="w-full md:w-3/4">Main Content</main>
    </div>
  );
};
```