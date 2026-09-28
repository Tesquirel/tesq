import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import { RatingFieldComponent } from '../../rating-field/rating-field/rating-field.component';
import { CategoryScore, ScoreCalculatorService } from '../../../service/score-calculator.service';


interface Question {
  id: string;
  text: string;
  dimension: string;
  weightage: number;
  rating: number;
}

interface Section {
  id: string;
  title: string;
  category: string;
  questions: Question[];
  fields?: any[];
}

interface FormConfig {
  formTitle: string;
  formSubtitle: string;
  ratingScale: Record<string, string>;
  sections: Section[];
}

@Component({
  selector: 'app-fitment-evaluator',
  standalone: true,
  imports: [CommonModule, FormsModule, RatingFieldComponent],
  templateUrl: './fitment-evaluator.component.html',
  styleUrls: ['./fitment-evaluator.component.scss']
})
export class FitmentEvaluatorComponent implements OnInit {

  notes: { [key: string]: string } = {};
  activeTab: string = 'prospect-info';
  formConfig: FormConfig | null = null;
  loading: boolean = true;
  error: string | null = null;
  ratings: Record<string, number> = {};
  emailInvalid = false;
  phoneInvalid = false;
  websiteInvalid = false;
  visibleSection = '';
  touched = false;
  prospectData: any = {
    fullName: '',
    email: '',
    websiteUrl: '',
    phoneNumber: ''
  };
  categoryScores: CategoryScore[] = [];
  overallResult: any = null;
  isProspectComplete = false;
  showCheckboxPage = false;
  showRAG = false;
  showAIAgents = false;
  showLLMs = false;
  showGeneralAI = false;
  isRAGComplete = false;
  isAIAgentsComplete = false;
  isLLMsComplete = false;
  isGeneralAIComplete = false;
  private previousShowRAG = false;
  private previousShowAIAgents = false;
  private previousShowLLMs = false;
  private previousShowGeneralAI = false;
  countries = [
    { name: 'Afghanistan', code: '93' },
    { name: 'Albania', code: '355' },
    { name: 'Algeria', code: '213' },
    { name: 'American Samoa', code: '1-684' },
    { name: 'Andorra', code: '376' },
    { name: 'Angola', code: '244' },
    { name: 'Anguilla', code: '1-264' },
    { name: 'Antarctica', code: '672' },
    { name: 'Antigua and Barbuda', code: '1-268' },
    { name: 'Argentina', code: '54' },
    { name: 'Armenia', code: '374' },
    { name: 'Aruba', code: '297' },
    { name: 'Australia', code: '61' },
    { name: 'Austria', code: '43' },
    { name: 'Azerbaijan', code: '994' },
    { name: 'Bahamas', code: '1-242' },
    { name: 'Bahrain', code: '973' },
    { name: 'Bangladesh', code: '880' },
    { name: 'Barbados', code: '1-246' },
    { name: 'Belarus', code: '375' },
    { name: 'Belgium', code: '32' },
    { name: 'Belize', code: '501' },
    { name: 'Benin', code: '229' },
    { name: 'Bermuda', code: '1-441' },
    { name: 'Bhutan', code: '975' },
    { name: 'Bolivia', code: '591' },
    { name: 'Bosnia and Herzegovina', code: '387' },
    { name: 'Botswana', code: '267' },
    { name: 'Brazil', code: '55' },
    { name: 'British Indian Ocean Territory', code: '246' },
    { name: 'British Virgin Islands', code: '1-284' },
    { name: 'Brunei', code: '673' },
    { name: 'Bulgaria', code: '359' },
    { name: 'Burkina Faso', code: '226' },
    { name: 'Burundi', code: '257' },
    { name: 'Cambodia', code: '855' },
    { name: 'Cameroon', code: '237' },
    { name: 'Canada', code: '1' },
    { name: 'Cape Verde', code: '238' },
    { name: 'Cayman Islands', code: '1-345' },
    { name: 'Central African Republic', code: '236' },
    { name: 'Chad', code: '235' },
    { name: 'Chile', code: '56' },
    { name: 'China', code: '86' },
    { name: 'Christmas Island', code: '61' },
    { name: 'Cocos Islands', code: '61' },
    { name: 'Colombia', code: '57' },
    { name: 'Comoros', code: '269' },
    { name: 'Cook Islands', code: '682' },
    { name: 'Costa Rica', code: '506' },
    { name: 'Croatia', code: '385' },
    { name: 'Cuba', code: '53' },
    { name: 'Curacao', code: '599' },
    { name: 'Cyprus', code: '357' },
    { name: 'Czech Republic', code: '420' },
    { name: 'Denmark', code: '45' },
    { name: 'Djibouti', code: '253' },
    { name: 'Dominica', code: '1-767' },
    { name: 'Dominican Republic', code: '1-809' },
    { name: 'East Timor', code: '670' },
    { name: 'Ecuador', code: '593' },
    { name: 'Egypt', code: '20' },
    { name: 'El Salvador', code: '503' },
    { name: 'Equatorial Guinea', code: '240' },
    { name: 'Eritrea', code: '291' },
    { name: 'Estonia', code: '372' },
    { name: 'Eswatini', code: '268' },
    { name: 'Ethiopia', code: '251' },
    { name: 'Falkland Islands', code: '500' },
    { name: 'Faroe Islands', code: '298' },
    { name: 'Fiji', code: '679' },
    { name: 'Finland', code: '358' },
    { name: 'France', code: '33' },
    { name: 'French Guiana', code: '594' },
    { name: 'French Polynesia', code: '689' },
    { name: 'Gabon', code: '241' },
    { name: 'Gambia', code: '220' },
    { name: 'Georgia', code: '995' },
    { name: 'Germany', code: '49' },
    { name: 'Ghana', code: '233' },
    { name: 'Gibraltar', code: '350' },
    { name: 'Greece', code: '30' },
    { name: 'Greenland', code: '299' },
    { name: 'Grenada', code: '1-473' },
    { name: 'Guadeloupe', code: '590' },
    { name: 'Guam', code: '1-671' },
    { name: 'Guatemala', code: '502' },
    { name: 'Guernsey', code: '44-1481' },
    { name: 'Guinea', code: '224' },
    { name: 'Guinea-Bissau', code: '245' },
    { name: 'Guyana', code: '592' },
    { name: 'Haiti', code: '509' },
    { name: 'Honduras', code: '504' },
    { name: 'Hong Kong', code: '852' },
    { name: 'Hungary', code: '36' },
    { name: 'Iceland', code: '354' },
    { name: 'India', code: '91' },
    { name: 'Indonesia', code: '62' },
    { name: 'Iran', code: '98' },
    { name: 'Iraq', code: '964' },
    { name: 'Ireland', code: '353' },
    { name: 'Isle of Man', code: '44-1624' },
    { name: 'Israel', code: '972' },
    { name: 'Italy', code: '39' },
    { name: 'Ivory Coast', code: '225' },
    { name: 'Jamaica', code: '1-876' },
    { name: 'Japan', code: '81' },
    { name: 'Jersey', code: '44-1534' },
    { name: 'Jordan', code: '962' },
    { name: 'Kazakhstan', code: '7' },
    { name: 'Kenya', code: '254' },
    { name: 'Kiribati', code: '686' },
    { name: 'Kosovo', code: '383' },
    { name: 'Kuwait', code: '965' },
    { name: 'Kyrgyzstan', code: '996' },
    { name: 'Laos', code: '856' },
    { name: 'Latvia', code: '371' },
    { name: 'Lebanon', code: '961' },
    { name: 'Lesotho', code: '266' },
    { name: 'Liberia', code: '231' },
    { name: 'Libya', code: '218' },
    { name: 'Liechtenstein', code: '423' },
    { name: 'Lithuania', code: '370' },
    { name: 'Luxembourg', code: '352' },
    { name: 'Macau', code: '853' },
    { name: 'Madagascar', code: '261' },
    { name: 'Malawi', code: '265' },
    { name: 'Malaysia', code: '60' },
    { name: 'Maldives', code: '960' },
    { name: 'Mali', code: '223' },
    { name: 'Malta', code: '356' },
    { name: 'Marshall Islands', code: '692' },
    { name: 'Martinique', code: '596' },
    { name: 'Mauritania', code: '222' },
    { name: 'Mauritius', code: '230' },
    { name: 'Mayotte', code: '262' },
    { name: 'Mexico', code: '52' },
    { name: 'Micronesia', code: '691' },
    { name: 'Moldova', code: '373' },
    { name: 'Monaco', code: '377' },
    { name: 'Mongolia', code: '976' },
    { name: 'Montenegro', code: '382' },
    { name: 'Montserrat', code: '1-664' },
    { name: 'Morocco', code: '212' },
    { name: 'Mozambique', code: '258' },
    { name: 'Myanmar', code: '95' },
    { name: 'Namibia', code: '264' },
    { name: 'Nauru', code: '674' },
    { name: 'Nepal', code: '977' },
    { name: 'Netherlands', code: '31' },
    { name: 'New Caledonia', code: '687' },
    { name: 'New Zealand', code: '64' },
    { name: 'Nicaragua', code: '505' },
    { name: 'Niger', code: '227' },
    { name: 'Nigeria', code: '234' },
    { name: 'Niue', code: '683' },
    { name: 'North Korea', code: '850' },
    { name: 'North Macedonia', code: '389' },
    { name: 'Northern Mariana Islands', code: '1-670' },
    { name: 'Norway', code: '47' },
    { name: 'Oman', code: '968' },
    { name: 'Pakistan', code: '92' },
    { name: 'Palau', code: '680' },
    { name: 'Palestine', code: '970' },
    { name: 'Panama', code: '507' },
    { name: 'Papua New Guinea', code: '675' },
    { name: 'Paraguay', code: '595' },
    { name: 'Peru', code: '51' },
    { name: 'Philippines', code: '63' },
    { name: 'Poland', code: '48' },
    { name: 'Portugal', code: '351' },
    { name: 'Puerto Rico', code: '1-787' },
    { name: 'Qatar', code: '974' },
    { name: 'Reunion', code: '262' },
    { name: 'Romania', code: '40' },
    { name: 'Russia', code: '7' },
    { name: 'Rwanda', code: '250' },
    { name: 'Saint Barthelemy', code: '590' },
    { name: 'Saint Helena', code: '290' },
    { name: 'Saint Kitts and Nevis', code: '1-869' },
    { name: 'Saint Lucia', code: '1-758' },
    { name: 'Saint Martin', code: '590' },
    { name: 'Saint Pierre and Miquelon', code: '508' },
    { name: 'Saint Vincent and the Grenadines', code: '1-784' },
    { name: 'Samoa', code: '685' },
    { name: 'San Marino', code: '378' },
    { name: 'Sao Tome and Principe', code: '239' },
    { name: 'Saudi Arabia', code: '966' },
    { name: 'Senegal', code: '221' },
    { name: 'Serbia', code: '381' },
    { name: 'Seychelles', code: '248' },
    { name: 'Sierra Leone', code: '232' },
    { name: 'Singapore', code: '65' },
    { name: 'Sint Maarten', code: '1-721' },
    { name: 'Slovakia', code: '421' },
    { name: 'Slovenia', code: '386' },
    { name: 'Solomon Islands', code: '677' },
    { name: 'Somalia', code: '252' },
    { name: 'South Africa', code: '27' },
    { name: 'South Korea', code: '82' },
    { name: 'South Sudan', code: '211' },
    { name: 'Spain', code: '34' },
    { name: 'Sri Lanka', code: '94' },
    { name: 'Sudan', code: '249' },
    { name: 'Suriname', code: '597' },
    { name: 'Svalbard and Jan Mayen', code: '47' },
    { name: 'Sweden', code: '46' },
    { name: 'Switzerland', code: '41' },
    { name: 'Syria', code: '963' },
    { name: 'Taiwan', code: '886' },
    { name: 'Tajikistan', code: '992' },
    { name: 'Tanzania', code: '255' },
    { name: 'Thailand', code: '66' },
    { name: 'Togo', code: '228' },
    { name: 'Tokelau', code: '690' },
    { name: 'Tonga', code: '676' },
    { name: 'Trinidad and Tobago', code: '1-868' },
    { name: 'Tunisia', code: '216' },
    { name: 'Turkey', code: '90' },
    { name: 'Turkmenistan', code: '993' },
    { name: 'Turks and Caicos Islands', code: '1-649' },
    { name: 'Tuvalu', code: '688' },
    { name: 'Uganda', code: '256' },
    { name: 'Ukraine', code: '380' },
    { name: 'United Arab Emirates', code: '971' },
    { name: 'United Kingdom', code: '44' },
    { name: 'United States', code: '1' },
    { name: 'Uruguay', code: '598' },
    { name: 'Uzbekistan', code: '998' },
    { name: 'Vanuatu', code: '678' },
    { name: 'Vatican', code: '379' },
    { name: 'Venezuela', code: '58' },
    { name: 'Vietnam', code: '84' },
    { name: 'Virgin Islands (British)', code: '1-284' },
    { name: 'Virgin Islands (US)', code: '1-340' },
    { name: 'Wallis and Futuna', code: '681' },
    { name: 'Western Sahara', code: '212' },
    { name: 'Yemen', code: '967' },
    { name: 'Zambia', code: '260' },
    { name: 'Zimbabwe', code: '263' }
  ];
  selectedCountry = '';
  selectedCountryCode = '';
  phoneErrorMessage= '';
  selectedCountryName: any;
  onCountryChange(): void {
    if (this.selectedCountry) {
      const country = this.countries.find(c => c.code === this.selectedCountry);
      if (country) {
        this.selectedCountryCode = country.code;
        // Clear phone number when country changes
        this.prospectData.phoneNumber = '';
        this.phoneInvalid = false;
        this.phoneErrorMessage = '';
      }
    } else {
      this.selectedCountryCode = '';
      this.prospectData.phoneNumber = '';
    }
    this.checkProspectComplete();
  }

  // Get phone number placeholder based on country
  getPhonePlaceholder(): string {
    if (this.selectedCountryCode === '91') {
      return '1234567890 (10 digits)';
    } else if (this.selectedCountryCode === '1') {
      return '1234567890 (10 digits)';
    } else if (this.selectedCountryCode === '44') {
      return '1234567890 (10 digits)';
    } else {
      return 'Enter phone number';
    }
  }

  validatePhone(): boolean {
    const rawValue = this.prospectData.phoneNumber;

    if (!rawValue || rawValue.trim() === '') {
      this.phoneInvalid = false;
      this.phoneErrorMessage = '';
      this.checkProspectComplete();
      return false;
    }

    // Check for non-digit characters
    if (/[^\d]/.test(rawValue)) {
      this.phoneInvalid = true;
      this.phoneErrorMessage = 'Phone number can only contain numbers (0-9)';
      this.checkProspectComplete();
      return false;
    }

    this.phoneInvalid = false;
    this.phoneErrorMessage = '';
    this.checkProspectComplete();
    return true;
  }
  // Updated formatPhoneNumber method
  formatPhoneNumber(): void {
    // Only clean if valid
    if (this.prospectData.phoneNumber && !this.phoneInvalid) {
      let cleaned = this.prospectData.phoneNumber.replace(/\D/g, '');
      this.prospectData.phoneNumber = cleaned;
    }
  }
  onPhoneInput(): void {
    const rawValue = this.prospectData.phoneNumber;

    if (!rawValue || rawValue.trim() === '') {
      this.phoneInvalid = false;
      this.phoneErrorMessage = '';
      this.checkProspectComplete();
      return;
    }

    // Check for non-digits
    if (/[^\d]/.test(rawValue)) {
      this.phoneInvalid = true;
      this.phoneErrorMessage = 'Phone number can only contain numbers (0-9)';
    } else {
      this.phoneInvalid = false;
      this.phoneErrorMessage = '';
      // Clean to numbers only
      this.prospectData.phoneNumber = rawValue.replace(/\D/g, '');
    }

    this.checkProspectComplete();
  }
  // Method to get full phone number with country code
  getFullPhoneNumber(): string {
    if (this.selectedCountryCode && this.prospectData.phoneNumber) {
      return `+${this.selectedCountryCode}${this.prospectData.phoneNumber}`;
    }
    return this.prospectData.phoneNumber || '';
  }

  checkbox = [
    { id: 'prospect-info', label: '📋 Prospect Info' },
    { id: 'rag-evaluation', label: '📚 RAG' },
    { id: 'ai-agents-evaluation', label: '🤝 AI Agents' },
    { id: 'llm-evaluation', label: '🧠 LLMs' },
    { id: 'general-ai-evaluation', label: '⚙️ General AI' },
    { id: 'summary-dashboard', label: '📊 Summary Dashboard' }
  ];


  constructor(
    private http: HttpClient,
    private scoreCalculator: ScoreCalculatorService
  ) { }

  ngOnInit() {
    this.loadConfig();
    this.loadSavedData();
    // Initialize previous states
    this.updatePreviousStates();
    this.checkProspectComplete();
    this.filteredCountries = [...this.countries];
    this.selectedCountryCode = '91';
  }

  loadConfig() {
    this.http.get<FormConfig>('assets/ai-fitment-config.json').subscribe({
      next: (data) => {
        this.formConfig = data;
        this.initializeRatings();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading config:', err);
        this.error = 'Failed to load evaluation data. Please check if JSON file exists.';
        this.loading = false;
      }
    });
  }

  initializeRatings() {
    if (!this.formConfig) return;
    for (const section of this.formConfig.sections) {
      if (section.questions) {
        for (const question of section.questions) {
          this.ratings[question.id] = 0;
        }
      }
    }
    this.calculateScores();
  }

  loadSavedData() {
    const savedRatings = localStorage.getItem('fitment_ratings');
    if (savedRatings) {
      this.ratings = JSON.parse(savedRatings);
    }
    const savedProspect = localStorage.getItem('fitment_prospect');
    if (savedProspect) {
      const oldData = JSON.parse(savedProspect);
      // Migrate old data structure to new one
      this.prospectData = {
        fullName: oldData.primaryContact || oldData.fullName || oldData.companyName || '',
        email: oldData.email || '',
        websiteUrl: oldData.website || oldData.websiteUrl || '',
        phoneNumber: oldData.phone || oldData.phoneNumber || ''
      };
      this.saveProspectData();
    }
  }

  saveRatings() {
    localStorage.setItem('fitment_ratings', JSON.stringify(this.ratings));
    this.calculateScores();
    this.checkSectionCompletion();
  }

  saveProspectData() {
    localStorage.setItem('fitment_prospect', JSON.stringify(this.prospectData));
  }

  checkSectionCompletion() {
    if (!this.formConfig) return;

    const ragQuestions = this.getSectionQuestions('rag-evaluation');
    this.isRAGComplete = ragQuestions.length > 0 && ragQuestions.every(q => (this.ratings[q.id] || 0) > 0);

    const agentsQuestions = this.getSectionQuestions('ai-agents-evaluation');
    this.isAIAgentsComplete = agentsQuestions.length > 0 && agentsQuestions.every(q => (this.ratings[q.id] || 0) > 0);

    const llmQuestions = this.getSectionQuestions('llm-evaluation');
    this.isLLMsComplete = llmQuestions.length > 0 && llmQuestions.every(q => (this.ratings[q.id] || 0) > 0);

    const generalQuestions = this.getSectionQuestions('general-ai-evaluation');
    this.isGeneralAIComplete = generalQuestions.length > 0 && generalQuestions.every(q => (this.ratings[q.id] || 0) > 0);
  }

  resetCategoryRatings(sectionId: string) {
    const section = this.formConfig?.sections.find(s => s.id === sectionId);
    if (section && section.questions) {
      for (const question of section.questions) {
        this.ratings[question.id] = 0;
      }
    }
    this.saveRatings();
    this.checkSectionCompletion();
  }

  isOtherSectionActiveAndIncomplete(currentSection: string): boolean {
    if (!this.visibleSection || this.visibleSection === '') {
      return false;
    }

    if (this.visibleSection === currentSection) {
      return false;
    }

    if (this.visibleSection === 'rag' && !this.isRAGComplete) return true;
    if (this.visibleSection === 'ai-agents' && !this.isAIAgentsComplete) return true;
    if (this.visibleSection === 'llm' && !this.isLLMsComplete) return true;
    if (this.visibleSection === 'general' && !this.isGeneralAIComplete) return true;

    return false;
  }

  getDefaultVisibleSection(): string {
    if (this.showRAG && (this.isRAGComplete || this.hasAnyRating('rag-evaluation'))) return 'rag';
    if (this.showAIAgents && (this.isAIAgentsComplete || this.hasAnyRating('ai-agents-evaluation'))) return 'ai-agents';
    if (this.showLLMs && (this.isLLMsComplete || this.hasAnyRating('llm-evaluation'))) return 'llm';
    if (this.showGeneralAI && (this.isGeneralAIComplete || this.hasAnyRating('general-ai-evaluation'))) return 'general';
    if (this.showRAG) return 'rag';
    if (this.showAIAgents) return 'ai-agents';
    if (this.showLLMs) return 'llm';
    if (this.showGeneralAI) return 'general';
    return '';
  }

  // Check if section has any ratings
  hasAnyRating(sectionId: string): boolean {
    const section = this.formConfig?.sections.find(s => s.id === sectionId);
    if (section && section.questions) {
      return section.questions.some(q => (this.ratings[q.id] || 0) > 0);
    }
    return false;
  }

  onCheckboxChange(section: string) {
    if (section === 'rag') {
      if (this.previousShowRAG && !this.showRAG) {
        if (this.hasAnyRating('rag-evaluation')) {
          if (confirm('Delete all RAG evaluation data?')) {
            this.resetCategoryRatings('rag-evaluation');
          } else {
            this.showRAG = true;
            this.updatePreviousStates();
            return;
          }
        }
        this.visibleSection = this.getDefaultVisibleSection();
      } else if (this.showRAG) {
        this.visibleSection = 'rag';
      }
    } else if (section === 'ai-agents') {
      if (this.previousShowAIAgents && !this.showAIAgents) {
        if (this.hasAnyRating('ai-agents-evaluation')) {
          if (confirm('Delete all AI Agents evaluation data?')) {
            this.resetCategoryRatings('ai-agents-evaluation');
          } else {
            this.showAIAgents = true;
            this.updatePreviousStates();
            return;
          }
        }
        this.visibleSection = this.getDefaultVisibleSection();
      } else if (this.showAIAgents) {
        this.visibleSection = 'ai-agents';
      }
    } else if (section === 'llm') {
      if (this.previousShowLLMs && !this.showLLMs) {
        if (this.hasAnyRating('llm-evaluation')) {
          if (confirm('Delete all LLMs evaluation data?')) {
            this.resetCategoryRatings('llm-evaluation');
          } else {
            this.showLLMs = true;
            this.updatePreviousStates();
            return;
          }
        }
        this.visibleSection = this.getDefaultVisibleSection();
      } else if (this.showLLMs) {
        this.visibleSection = 'llm';
      }
    } else if (section === 'general') {
      if (this.previousShowGeneralAI && !this.showGeneralAI) {
        if (this.hasAnyRating('general-ai-evaluation')) {
          if (confirm('Delete all General AI evaluation data?')) {
            this.resetCategoryRatings('general-ai-evaluation');
          } else {
            this.showGeneralAI = true;
            this.updatePreviousStates();
            return;
          }
        }
        this.visibleSection = this.getDefaultVisibleSection();
      } else if (this.showGeneralAI) {
        this.visibleSection = 'general';
      }
    }

    this.updatePreviousStates();
    this.calculateScores();
    this.checkSectionCompletion();
  }


  nextSection() {
    if (this.showRAG && this.visibleSection === 'rag' && this.isRAGComplete) {
      this.showAIAgents = true;
      this.visibleSection = 'ai-agents';
    } else if (this.showAIAgents && this.visibleSection === 'ai-agents' && this.isAIAgentsComplete) {
      this.showLLMs = true;
      this.visibleSection = 'llm';
    } else if (this.showLLMs && this.visibleSection === 'llm' && this.isLLMsComplete) {
      this.showGeneralAI = true;
      this.visibleSection = 'general';
    }
    this.updatePreviousStates();
  }

  prevSection() {
    if (this.showAIAgents && this.visibleSection === 'ai-agents') {
      this.visibleSection = 'rag';
    } else if (this.showLLMs && this.visibleSection === 'llm') {
      this.visibleSection = 'ai-agents';
    } else if (this.showGeneralAI && this.visibleSection === 'general') {
      this.visibleSection = 'llm';
    }
    this.updatePreviousStates();
  }

  collapseSection() {
    if (this.visibleSection === 'rag') {
      this.showRAG = false;
      this.visibleSection = this.getDefaultVisibleSection();
    } else if (this.visibleSection === 'ai-agents') {
      this.showAIAgents = false;
      this.visibleSection = this.getDefaultVisibleSection();
    } else if (this.visibleSection === 'llm') {
      this.showLLMs = false;
      this.visibleSection = this.getDefaultVisibleSection();
    } else if (this.visibleSection === 'general') {
      this.showGeneralAI = false;
      this.visibleSection = this.getDefaultVisibleSection();
    }
    this.updatePreviousStates();
    this.calculateScores();
    this.checkSectionCompletion();
  }

  completeSection() {
    this.updatePreviousStates();
    this.calculateScores();
    this.checkSectionCompletion();
  }

  updatePreviousStates() {
    this.previousShowRAG = this.showRAG;
    this.previousShowAIAgents = this.showAIAgents;
    this.previousShowLLMs = this.showLLMs;
    this.previousShowGeneralAI = this.showGeneralAI;
  }

  checkProspectComplete() {
    this.saveProspectData();

    const requiredFields = [
      this.prospectData.fullName,
      this.prospectData.email,
      this.prospectData.websiteUrl,
      this.prospectData.phoneNumber
    ];

    this.isProspectComplete = requiredFields.every(field =>
      field && field.toString().trim() !== ''
    ) && !this.emailInvalid && !this.phoneInvalid && !this.websiteInvalid;
  }

  // Go to checkbox page
  goToCheckboxPage() {
    if (this.isProspectComplete) {
      this.showCheckboxPage = true;
      this.touched = true;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }

  onRatingChange(questionId: string, ratingOrEvent: number | any) {
    let rating: number;
    if (typeof ratingOrEvent === 'number') {
      rating = ratingOrEvent;
    } else {
      rating = ratingOrEvent;
    }
    this.ratings[questionId] = rating;
    this.saveRatings();
  }

  onProspectFieldChange(field: string, event: any) {
    this.prospectData[field] = event.target.value;

    // Trigger validation based on field
    if (field === 'phoneNumber') {
      this.validatePhone();
    } else if (field === 'email') {
      this.validateEmail();
    } else if (field === 'websiteUrl') {
      this.validateWebsite();
    }

    this.saveProspectData();
  }

  calculateScores() {
    if (!this.formConfig) return;
    const categoryScores: CategoryScore[] = [];
    for (const section of this.formConfig.sections) {
      if (section.questions && section.questions.length > 0) {
        const ratingsList = section.questions.map(q => ({
          value: this.ratings[q.id] || 0,
          weightage: q.weightage
        }));
        const score = this.scoreCalculator.calculateCategoryScore(ratingsList);
        const fitment = this.scoreCalculator.getFitmentLevel(score);
        categoryScores.push({
          category: section.category || section.title,
          score: score,
          fitmentLevel: fitment.level,
          color: fitment.color,
          action: fitment.action
        });
      }
    }
    this.categoryScores = categoryScores;
    this.overallResult = this.scoreCalculator.calculateOverall(categoryScores);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    if (tabId === 'summary-dashboard') {
      this.calculateScores();
    }
  }

  resetAll() {
    if (confirm('Reset All selected ratings?')) {
      this.initializeRatings();
      this.saveRatings();
      this.calculateScores();
      this.checkSectionCompletion();
      alert('Selected ratings reset successfully!');
    }
  }

  exportReport() {
  const ragScore = this.getCategoryScore('RAG');
  const agentsScore = this.getCategoryScore('AI Agents');
  const llmsScore = this.getCategoryScore('LLMs');
  const generalScore = this.getCategoryScore('General AI');
  const overallScore = this.getSelectedSectionsOverallScore();
  const pdf = new jsPDF();
  pdf.setFillColor(30, 60, 114);
  pdf.rect(0, 0, 210, 25, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(16);
  pdf.text('AI Project Fitment Report', 105, 15, { align: 'center' });
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(13);
  pdf.text('Prospect Information', 15, 35);
  pdf.setDrawColor(200);
  pdf.rect(15, 40, 180, 35);
  pdf.setFontSize(11);
  pdf.text(`Name: ${this.prospectData.fullName || '-'}`, 20, 50);
  pdf.text(`Email: ${this.prospectData.email || '-'}`, 20, 58);
  pdf.text(`Website: ${this.prospectData.websiteUrl || '-'}`, 20, 66);
  pdf.text(`Phone: ${this.prospectData.phoneNumber || '-'}`, 110, 50);
  const scores = [
    { label: 'RAG', value: ragScore, color: [66, 165, 245] as [number, number, number] },
    { label: 'AI Agents', value: agentsScore, color: [102, 187, 106] as [number, number, number] },
    { label: 'LLMs', value: llmsScore, color: [255, 167, 38] as [number, number, number] },
    { label: 'General AI', value: generalScore, color: [239, 83, 80] as [number, number, number] }
  ];
  let startX = 15;
  scores.forEach((s) => {
    pdf.setFillColor(s.color[0], s.color[1], s.color[2]);
    pdf.rect(startX, 80, 40, 25, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    pdf.text(s.label, startX + 5, 90);
    pdf.setFontSize(14);
    pdf.text(`${s.value}`, startX + 5, 100);
    startX += 45;
  });
  pdf.setTextColor(0, 0, 0);
  let yPos = 120;
  scores.forEach((s) => {
    pdf.setFontSize(11);
    pdf.text(s.label, 15, yPos);
    pdf.setFillColor(220, 220, 220);
    pdf.rect(60, yPos - 5, 120, 6, 'F');
    pdf.setFillColor(s.color[0], s.color[1], s.color[2]);
    const barWidth = (s.value / 5) * 120;
    pdf.rect(60, yPos - 5, barWidth, 6, 'F');
    pdf.text(`${s.value}%`, 185, yPos);

    yPos += 15;
  });

  // ===== OVERALL SCORE =====
  pdf.setFillColor(76, 175, 80);
  pdf.rect(15, 190, 180, 20, 'F');

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(13);
  pdf.text(`Overall Score: ${overallScore}`, 20, 203);

  pdf.setTextColor(0, 0, 0);

  // ===== FITMENT =====
  pdf.setFontSize(12);
  pdf.text(`Fitment: ${this.getSelectedSectionsOverallFitment()}`, 15, 225);

  // ===== RECOMMENDATION =====
  pdf.setFontSize(13);
  pdf.text('Recommendation', 15, 240);

  pdf.setDrawColor(180);
  pdf.rect(15, 245, 180, 35);

  pdf.setFontSize(11);
  pdf.text(
    this.getSelectedSectionsRecommendation(),
    20,
    255,
    { maxWidth: 170 }
  );

  // ===== FOOTER =====
  pdf.setFontSize(10);
  pdf.setTextColor(120);
  pdf.text('Generated by AI Fitment Tool', 105, 290, { align: 'center' });

  // ===== SAVE =====
  pdf.save(`AI_Fitment_Report_${this.prospectData.fullName || 'Prospect'}.pdf`);
}
  getFitmentLevelText(score: number): string {
    if (score >= 4) return "Strong Fit";
    if (score >= 3) return "Good Fit";
    if (score >= 2) return "Moderate Fit";
    if (score >= 1) return "Weak Fit";
    return "Not Ready";
  }

  getSectionFields(sectionId: string) {
    if (!this.formConfig) return [];
    const section = this.formConfig.sections.find(s => s.id === sectionId);
    return section?.fields || [];
  }

  getSectionQuestions(sectionId: string) {
    if (!this.formConfig) return [];
    const section = this.formConfig.sections.find(s => s.id === sectionId);
    return section?.questions || [];
  }

  getCategoryScore(category: string): number {
    const cat = this.categoryScores.find(c => c.category === category);
    return cat ? cat.score : 0;
  }

  getCategoryFitment(category: string): string {
    const cat = this.categoryScores.find(c => c.category === category);
    return cat ? cat.fitmentLevel : 'Not Rated';
  }

  getCategoryColor(category: string): string {
    const cat = this.categoryScores.find(c => c.category === category);
    return cat ? cat.color : '#9ca3af';
  }

  getOverallScore(): number {
    return this.overallResult?.overallScore || 0;
  }

  getOverallFitment(): string {
    return this.overallResult?.overallFitment || 'Not Ready';
  }

  getRecommendation(): string {
    return this.overallResult?.recommendation || 'Complete the evaluation to see recommendation.';
  }

  goToNextTab() {
    const currentIndex = this.checkbox.findIndex(tab => tab.id === this.activeTab);
    if (currentIndex < this.checkbox.length - 1) {
      this.activeTab = this.checkbox[currentIndex + 1].id;
    }
  }

  goToPreviousSection() {
    this.showCheckboxPage = false;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }

  testFillProspectData() {
    this.prospectData = {
      fullName: 'John Doe',
      email: 'john@testcompany.com',
      websiteUrl: 'https://testcompany.com',
      phoneNumber: '1234567890'
    };
    this.saveProspectData();
    this.validateEmail();
    this.validatePhone();
    this.validateWebsite();
    this.checkProspectComplete();
    alert('Test data filled! Check the form fields.');
  }

  testDashboard() {
    console.log('=== TEST DASHBOARD ===');
    console.log('Active Tab:', this.activeTab);
    console.log('FormConfig:', this.formConfig);
    console.log('Category Scores:', this.categoryScores);
    console.log('Overall Result:', this.overallResult);
    this.calculateScores();
    alert('Dashboard test complete! Check console (F12) for details.');
  }

  getSelectedSectionsOverallScore(): number {
    let total = 0;
    let count = 0;

    if (this.showRAG) {
      total += this.getCategoryScore('RAG');
      count++;
    }
    if (this.showAIAgents) {
      total += this.getCategoryScore('AI Agents');
      count++;
    }
    if (this.showLLMs) {
      total += this.getCategoryScore('LLMs');
      count++;
    }
    if (this.showGeneralAI) {
      total += this.getCategoryScore('General AI');
      count++;
    }
    return count > 0 ? total / count : 0;
  }

  getSelectedSectionsOverallFitment(): string {
    const score = this.getSelectedSectionsOverallScore();
    if (score >= 4) return 'Strong Fit';
    if (score >= 3) return 'Good Fit';
    if (score >= 2) return 'Moderate Fit';
    if (score >= 1) return 'Weak Fit';
    return 'Not Ready';
  }

  getSelectedSectionsRecommendation(): string {
    const score = this.getSelectedSectionsOverallScore();
    if (score >= 4) {
      return 'Strong Fit — Proceed with full proposal. Prioritise this prospect for senior engagement.';
    } else if (score >= 3) {
      return 'Good Fit — Pursue with a targeted approach. Identify 1-2 gap areas and propose a phased roadmap or focused POC.';
    } else if (score >= 2) {
      return 'Moderate Fit — Enablement required. Consider a discovery workshop or readiness assessment before full proposal.';
    } else {
      return 'Weak Fit — Do not invest significant sales effort now. Add to nurture track and re-evaluate in 2 quarters.';
    }
  }

  validateEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+\-*]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.prospectData.email || this.prospectData.email.trim() === '') {
      this.emailInvalid = false;
      this.checkProspectComplete();
      return false;
    }
    this.emailInvalid = !emailRegex.test(this.prospectData.email);
    this.checkProspectComplete();
    return !this.emailInvalid;
  }

  validateWebsite(): boolean {
    if (!this.prospectData.websiteUrl || this.prospectData.websiteUrl.trim() === '') {
      this.websiteInvalid = false;
      this.checkProspectComplete();
      return false;
    }

    const url = this.prospectData.websiteUrl.trim();
    const urlRegex = /^https?:\/\/.+/i;
    this.websiteInvalid = !urlRegex.test(url);
    this.checkProspectComplete();
    return !this.websiteInvalid;
  }

  showCountryDropdown: boolean = false;
  countrySearch: string = '';
  filteredCountries: any[] = [];

  toggleCountryDropdown(): void {
    this.showCountryDropdown = !this.showCountryDropdown;
    if (this.showCountryDropdown) {
      this.countrySearch = '';
      this.filteredCountries = [...this.countries];
    }
  }

  filterCountries(): void {
    const searchTerm = this.countrySearch.toLowerCase();
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.code.includes(searchTerm)
    );
  }

  selectCountry(country: any): void {
    this.selectedCountryCode = country.code;
    this.selectedCountryName = country.name;
    this.showCountryDropdown = false;
    this.countrySearch = '';
    this.prospectData.phoneNumber = '';
    this.phoneInvalid = false;
    this.phoneErrorMessage = '';
    this.checkProspectComplete();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!(event.target as HTMLElement).closest('.country-code-selector')) {
      this.showCountryDropdown = false;
    }
  }
  get isReportDisabled(): boolean {
    return !(this.showRAG || this.showAIAgents || this.showLLMs || this.showGeneralAI) ||
      (this.showRAG && !this.isRAGComplete) ||
      (this.showAIAgents && !this.isAIAgentsComplete) ||
      (this.showLLMs && !this.isLLMsComplete) ||
      (this.showGeneralAI && !this.isGeneralAIComplete);
  }
}
