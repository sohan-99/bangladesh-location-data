# 🇧🇩 Bangladesh Location Data

A comprehensive, open-source dataset containing all administrative divisions of Bangladesh - from **Divisions** down to **Unions** - available in both **Bangla (বাংলা)** and **English**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/bangladesh-location-data.svg)](https://www.npmjs.com/package/bangladesh-location-data)
[![npm downloads](https://img.shields.io/npm/dm/bangladesh-location-data.svg)](https://www.npmjs.com/package/bangladesh-location-data)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Data Structure](#data-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Data Format](#data-format)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

This repository provides a complete hierarchical dataset of Bangladesh's administrative boundaries:

- **8 Divisions** (বিভাগ / Division)
- **64 Districts** (জেলা / District)
- **490+ Upazilas** (উপজেলা / Upazila)
- **4,500+ Unions** (ইউনিয়ন / Union)

Perfect for building location-based applications, forms, e-commerce platforms, delivery systems, and more.

## ✨ Features

- ✅ **Bilingual Support**: Complete data in both Bangla and English
- ✅ **Multiple Formats**: Available as JavaScript modules and JSON files
- ✅ **Hierarchical Structure**: Easy parent-child relationship navigation
- ✅ **Unique IDs**: Each location has a unique identifier
- ✅ **Lightweight**: Optimized file sizes for web applications
- ✅ **Free & Open Source**: MIT licensed for commercial and personal use
- ✅ **No Dependencies**: Pure data files, no external dependencies

## 📊 Data Structure

```
Bangladesh
├── Division (বিভাগ)
│   ├── District (জেলা)
│   │   ├── Upazila (উপজেলা)
│   │   │   └── Union (ইউনিয়ন)
```

### Hierarchy Example:
```
ঢাকা (Dhaka) Division
  └── ঢাকা (Dhaka) District
      └── ধামরাই (Dhamrai) Upazila
          └── সুতালড়ী (Sutaldi) Union
```

## 📦 Installation

### NPM (Recommended for Node.js/React/Vue/Angular projects)

```bash
npm install bangladesh-location-data
```

### Direct Download

Clone this repository or download specific files:

```bash
git clone https://github.com/sohan-99/bangladesh-location-data.git
```

## 🚀 Usage

### JavaScript/TypeScript (ES6 Modules)

```javascript
// Import English and Bangla data from the package
import {
  divisions_en,
  districts_en,
  upazilas_en,
  unions_en,
  divisions_bn,
  districts_bn,
  upazilas_bn,
  unions_bn
} from 'bangladesh-location-data';

// Use English data
console.log(divisions_en);
// Output: [{ value: 30, title: 'Dhaka' }, ...]

// Use Bangla data
console.log(divisions_bn);
// Output: [{ value: '30', title: 'ঢাকা' }, ...]
```

### React Example

```jsx
import { useState } from 'react';
// Import both English and Bangla exports
import {
  divisions_en,
  districts_en,
  upazilas_en,
  unions_en,
  divisions_bn,
  districts_bn,
  upazilas_bn,
  unions_bn
} from 'bangladesh-location-data';

function LocationSelector() {
  const [selectedDivision, setSelectedDivision] = useState('');
  const [availableDistricts, setAvailableDistricts] = useState([]);

  // Toggle between English or Bangla datasets as needed
  const divisions = divisions_en;
  const districts = districts_en;
  const upazilas = upazilas_en;
  const unions = unions_en;

  const handleDivisionChange = (e) => {
    const divisionId = e.target.value;
    setSelectedDivision(divisionId);
    setAvailableDistricts(districts[divisionId] || []);
  };

  return (
    <div>
      <select onChange={handleDivisionChange}>
        <option value="">Select Division</option>
        {divisions.map(div => (
          <option key={div.value} value={div.value}>
            {div.title}
          </option>
        ))}
      </select>

      {availableDistricts.length > 0 && (
        <select>
          <option value="">Select District</option>
          {availableDistricts.map(dist => (
            <option key={dist.value} value={dist.value}>
              {dist.title}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default LocationSelector;
```

### JSON API/Backend

```javascript
const fs = require('fs');

// Read JSON data
const data = JSON.parse(
  fs.readFileSync('./locationBdDivisonsToUnionsEnglish.json', 'utf8')
);

// Express.js API example
app.get('/api/divisions', (req, res) => {
  res.json(data.divisions_en);
});

app.get('/api/districts/:divisionId', (req, res) => {
  const districts = data.districts_en[req.params.divisionId] || [];
  res.json(districts);
});
```

### Vue.js Example

```vue
<template>
  <div>
    <select v-model="selectedDivision" @change="loadDistricts">
      <option value="">বিভাগ নির্বাচন করুন</option>
      <option v-for="div in divisions" :key="div.value" :value="div.value">
        {{ div.title }}
      </option>
    </select>
  </div>
</template>

<script>
// Import both English and Bangla exports from the package
import {
  divisions_en,
  districts_en,
  upazilas_en,
  unions_en,
  divisions_bn,
  districts_bn,
  upazilas_bn,
  unions_bn
} from 'bangladesh-location-data';

export default {
  data() {
    return {
      // Switch to divisions_bn / districts_bn / upazilas_bn / unions_bn for Bangla UI
      divisions: divisions_en,
      districts: districts_en,
      upazilas: upazilas_en,
      unions: unions_en,
      selectedDivision: '',
      currentDistricts: []
    };
  },
  methods: {
    loadDistricts() {
      this.currentDistricts = this.districts[this.selectedDivision] || [];
    }
  }
};
</script>
```

## 📝 Data Format

### JavaScript Files Structure

```javascript
// divisions array
const divisions = [
  { value: '30', title: 'ঢাকা' },
  { value: '20', title: 'চট্টগ্রাম' },
  // ...
];

// districts object (key: division_id)
const districts = {
  '30': [
    { value: '26', title: 'ঢাকা' },
    { value: '29', title: 'ফরিদপুর' },
    // ...
  ],
  // ...
};

// Similar structure for upazilas and unions
```

### JSON Files Structure

```json
{
  "divisions_bn": [
    { "value": "30", "title": "ঢাকা" }
  ],
  "districts_bn": {
    "30": [
      { "value": "26", "title": "ঢাকা" }
    ]
  },
  "upazilas_bn": { /* ... */ },
  "unions_bn": { /* ... */ }
}
```

## 📂 File Structure

```
bangladesh-location-data/
├── README.md
├── LICENSE
├── package.json
├── .gitignore
├── locationBdDivisonsToUnionsBangla.js     # Bangla JavaScript module
├── locationBdDivisonsToUnionsBangla.json   # Bangla JSON data
├── locationBdDivisonsToUnionsEnglish.js    # English JavaScript module
├── locationBdDivisonsToUnionsEnglish.json  # English JSON data
└── examples/
    ├── react-example.jsx
    ├── vue-example.vue
    └── vanilla-js-example.html
```

## 🔍 Data Coverage

| Level | Count | Status |
|-------|-------|--------|
| Divisions | 8 | ✅ Complete |
| Districts | 64 | ✅ Complete |
| Upazilas | 490+ | ✅ Complete |
| Unions | 4,500+ | ✅ Complete |

## 🤝 Contributing

Contributions are welcome! If you find any errors or want to improve the data:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Data Correction Guidelines

- Ensure accuracy of location names in both Bangla and English
- Maintain consistent formatting
- Verify administrative boundaries match official government data
- Update both JSON and JS files simultaneously

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Data compiled from official Bangladesh government sources
- Community contributions for data verification
- Open-source community for feedback and improvements

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/sohan-99/bangladesh-location-data/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sohan-99/bangladesh-location-data/discussions)

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

---

**Made with ❤️ for the Bangladesh developer community**
