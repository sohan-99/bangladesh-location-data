# Contributing to Bangladesh Location Data

Thank you for considering contributing to this project! 🎉

## How to Contribute

### Reporting Issues

If you find any errors in the location data:

1. Check if the issue already exists in [Issues](https://github.com/yourusername/bangladesh-location-data/issues)
2. If not, create a new issue with:
   - Clear title describing the problem
   - Current (incorrect) data
   - Correct data with source/reference
   - Location in the file where the error exists

### Submitting Changes

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/bangladesh-location-data.git
   cd bangladesh-location-data
   ```

2. **Create a Branch**
   ```bash
   git checkout -b fix/location-name-correction
   ```

3. **Make Your Changes**
   - Update both JSON and JS files simultaneously
   - Ensure data consistency between Bangla and English files
   - Maintain the existing data structure

4. **Test Your Changes**
   - Verify JSON syntax is valid
   - Check that IDs remain consistent
   - Ensure no duplicate entries

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Fix: Correct spelling of [location name]"
   ```

6. **Push and Create PR**
   ```bash
   git push origin fix/location-name-correction
   ```

## Data Guidelines

### Data Format Standards

- **IDs**: Must remain consistent across all levels
- **Naming**: Use official government spellings
- **Bangla Text**: Use proper Unicode Bangla characters
- **English Text**: Follow standard romanization

### Example Entry

**JSON Format:**
```json
{
  "value": "26",
  "title": "ঢাকা"
}
```

**JavaScript Format:**
```javascript
{ value: "26", title: "ঢাকা" }
```

## Code of Conduct

- Be respectful and constructive
- Focus on data accuracy
- Provide sources for corrections
- Help review others' contributions

## Questions?

Open a [Discussion](https://github.com/yourusername/bangladesh-location-data/discussions) for questions about contributing.

---

**Thank you for helping improve Bangladesh Location Data!** 🇧🇩
