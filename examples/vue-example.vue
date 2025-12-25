<template>
  <div class="location-selector">
    <h2>🇧🇩 Bangladesh Location Selector</h2>
    
    <!-- Division Select -->
    <div class="form-group">
      <label for="division">বিভাগ / Division</label>
      <select
        id="division"
        v-model="selectedDivision"
        @change="handleDivisionChange"
        class="form-control"
      >
        <option value="">Select Division</option>
        <option
          v-for="division in divisions"
          :key="division.value"
          :value="division.value"
        >
          {{ division.title }}
        </option>
      </select>
    </div>

    <!-- District Select -->
    <div class="form-group">
      <label for="district">জেলা / District</label>
      <select
        id="district"
        v-model="selectedDistrict"
        @change="handleDistrictChange"
        :disabled="!selectedDivision"
        class="form-control"
      >
        <option value="">
          {{ selectedDivision ? 'Select District' : 'First select a division' }}
        </option>
        <option
          v-for="district in availableDistricts"
          :key="district.value"
          :value="district.value"
        >
          {{ district.title }}
        </option>
      </select>
    </div>

    <!-- Upazila Select -->
    <div class="form-group">
      <label for="upazila">উপজেলা / Upazila</label>
      <select
        id="upazila"
        v-model="selectedUpazila"
        @change="handleUpazilaChange"
        :disabled="!selectedDistrict"
        class="form-control"
      >
        <option value="">
          {{ selectedDistrict ? 'Select Upazila' : 'First select a district' }}
        </option>
        <option
          v-for="upazila in availableUpazilas"
          :key="upazila.value"
          :value="upazila.value"
        >
          {{ upazila.title }}
        </option>
      </select>
    </div>

    <!-- Union Select -->
    <div class="form-group">
      <label for="union">ইউনিয়ন / Union</label>
      <select
        id="union"
        v-model="selectedUnion"
        :disabled="!selectedUpazila"
        class="form-control"
      >
        <option value="">
          {{ selectedUpazila ? 'Select Union' : 'First select an upazila' }}
        </option>
        <option
          v-for="union in availableUnions"
          :key="union.value"
          :value="union.value"
        >
          {{ union.title }}
        </option>
      </select>
    </div>

    <!-- Display Selected Data -->
    <div v-if="selectedDivision" class="selected-info">
      <h3>✅ Selected Location:</h3>
      <div class="info-item" v-if="getSelectedDivision">
        <strong>Division:</strong> {{ getSelectedDivision.title }}
      </div>
      <div class="info-item" v-if="getSelectedDistrict">
        <strong>District:</strong> {{ getSelectedDistrict.title }}
      </div>
      <div class="info-item" v-if="getSelectedUpazila">
        <strong>Upazila:</strong> {{ getSelectedUpazila.title }}
      </div>
      <div class="info-item" v-if="getSelectedUnion">
        <strong>Union:</strong> {{ getSelectedUnion.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { divisions, districts, upazilas, unions } from '../locationBdDivisonsToUnionsBangla.js';

export default {
  name: 'LocationSelector',
  
  data() {
    return {
      divisions,
      districts,
      upazilas,
      unions,
      
      selectedDivision: '',
      selectedDistrict: '',
      selectedUpazila: '',
      selectedUnion: '',
      
      availableDistricts: [],
      availableUpazilas: [],
      availableUnions: []
    };
  },
  
  computed: {
    getSelectedDivision() {
      return this.divisions.find(d => d.value === this.selectedDivision);
    },
    
    getSelectedDistrict() {
      return this.availableDistricts.find(d => d.value === this.selectedDistrict);
    },
    
    getSelectedUpazila() {
      return this.availableUpazilas.find(u => u.value === this.selectedUpazila);
    },
    
    getSelectedUnion() {
      return this.availableUnions.find(u => u.value === this.selectedUnion);
    }
  },
  
  methods: {
    handleDivisionChange() {
      this.selectedDistrict = '';
      this.selectedUpazila = '';
      this.selectedUnion = '';
      
      if (this.selectedDivision) {
        this.availableDistricts = this.districts[this.selectedDivision] || [];
      } else {
        this.availableDistricts = [];
      }
      
      this.availableUpazilas = [];
      this.availableUnions = [];
    },
    
    handleDistrictChange() {
      this.selectedUpazila = '';
      this.selectedUnion = '';
      
      if (this.selectedDistrict) {
        this.availableUpazilas = this.upazilas[this.selectedDistrict] || [];
      } else {
        this.availableUpazilas = [];
      }
      
      this.availableUnions = [];
    },
    
    handleUpazilaChange() {
      this.selectedUnion = '';
      
      if (this.selectedUpazila) {
        this.availableUnions = this.unions[this.selectedUpazila] || [];
      } else {
        this.availableUnions = [];
      }
    },
    
    // Method to get all selected data as an object
    getLocationData() {
      return {
        division: this.getSelectedDivision,
        district: this.getSelectedDistrict,
        upazila: this.getSelectedUpazila,
        union: this.getSelectedUnion
      };
    }
  }
};
</script>

<style scoped>
.location-selector {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.location-selector h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-control:hover {
  border-color: #667eea;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-control:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.selected-info {
  margin-top: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 10px;
  border: 2px solid #667eea30;
}

.selected-info h3 {
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
}

.info-item {
  padding: 8px 0;
  color: #555;
  border-bottom: 1px solid #e0e0e0;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item strong {
  color: #667eea;
  margin-right: 10px;
}
</style>
