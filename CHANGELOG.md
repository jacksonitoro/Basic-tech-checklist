# Changelog

## Sprint 2

### Added

- Main application layout
- Sidebar
- Header
- Dashboard
- SummaryCard component
- LearningList component

### Changed

- Dashboard now renders cards dynamically using `.map()`
- Moved dashboard data into `constants`

### Improved

- Better component composition
- Cleaner project structure

## Sprint 3

### Added

- React state management using `useState`
- Add Technology button
- Duplicate prevention for technologies using `includes()`

### Changed

- Dashboard now owns the technologies state
- LearningList now renders from React state instead of static constants

### Improved

- Implemented immutable state updates
- Established a single source of truth for learning technologies
- Improved application interactivity through state management