import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/about/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/about/company/company.component';
import { TeamComponent } from './components/about/team/team.component';
import { BlogComponent } from './components/resources/blog/blog.component';
import { NotFoundComponent } from './components/others/not-found/not-found.component';
import { BlogListComponent } from './components/resources/blog-list/blog-list.component';
import { BlogAddComponent } from './components/resources/blog-add/blog-add.component';
import { BlogDetailsComponent } from './components/resources/blog-details/blog-details.component';
import { authGuard } from './service/auth.guard';
import { BreezComponent } from './components/products/breez/breez.component';
import { AirisComponent } from './components/products/airis/airis.component';
import { AttestComponent } from './components/products/attest/attest.component';
import { BookAnAppointmentComponent } from './components/others/book-an-appointment/book-an-appointment.component';
import { SuccessStoriesComponent } from './components/resources/success-stories/success-stories.component';
import { VeritaiComponent } from './components/products/veritai/veritai.component';
import { SakhaiComponent } from './components/products/sakhai/sakhai.component';
import { InsuranceComponent } from './components/industries/insurance/insurance.component';
import { HealthTechComponent } from './components/industries/health-tech/health-tech.component';
import { RealEstateComponent } from './components/industries/real-estate/real-estate.component';
import { SalesforceComponent } from './components/industries/salesforce/salesforce.component';
import { OthersComponent } from './components/industries/others/others.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { MetaResolver } from './service/meta.resolver';
import { AutomationRoiComponent } from './shared/call-to-action/automation-roi/automation-roi.component';
import { AutomationApproachComponent } from './shared/call-to-action/automation-approach/automation-approach.component';
import { AutomationCheckListComponent } from './shared/call-to-action/automation-check-list/automation-check-list.component';
import { AutomationSanityComponent } from './shared/call-to-action/automation-sanity/automation-sanity.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FortifaiComponent } from './shared/call-to-action/fortifai/fortifai.component';
import { ApiTestingComponent } from './components/solutions/api-testing/api-testing.component';
import { RegressionTestingComponent } from './components/solutions/regression-testing/regression-testing.component';
import { UatAutomationComponent } from './components/solutions/uat-automation/uat-automation.component';
import { MainframeTestingComponent } from './components/solutions/mainframe-testing/mainframe-testing.component';
import { MobileTestingComponent } from './components/solutions/mobile-testing/mobile-testing.component';
import { VisualTestingComponent } from './components/solutions/visual-testing/visual-testing.component';
import { AiTestingComponent } from './components/solutions/ai-testing/ai-testing.component';
import { TestManagementComponent } from './components/solutions/test-management/test-management.component';
import { QualityEngineeringComponent } from './components/solutions/quality-engineering/quality-engineering.component';
import { TestAutomationComponent } from './components/solutions/test-automation/test-automation.component';
import { BfsiComponent } from './components/industries/bfsi/bfsi.component';
import { RetailComponent } from './components/industries/retail/retail.component';
import { ManufacturingComponent } from './components/industries/manufacturing/manufacturing.component';
import { EnterpriseSoftwareComponent } from './components/industries/enterprise-software/enterprise-software.component';
import { AchitectureComponent } from './components/platform/achitecture/achitecture.component';
import { OutcomesComponent } from './components/platform/outcomes/outcomes.component';
import { HowItWorksComponent } from './components/platform/how-it-works/how-it-works.component';
import { KeyCapabilitiesComponent } from './components/platform/key-capabilities/key-capabilities.component';
import { PlatformOverviewComponent } from './components/platform/platform-overview/platform-overview.component';
import { TrustverseOverviewComponent } from './components/trustverse/trustverse-overview/trustverse-overview.component';
import { App92PercentComponent } from './components/trustverse/app92-percent/app92-percent.component';
import { AiTrustComponent } from './components/trustverse/ai-trust/ai-trust.component';
import { GuardrailsComponent } from './components/trustverse/guardrails/guardrails.component';
import { EvidenceComponent } from './components/trustverse/evidence/evidence.component';
import { AccountabilityComponent } from './components/trustverse/accountability/accountability.component';
import { AgenticAiComponent } from './components/trustverse/agentic-ai/agentic-ai.component';
import { FrameworkComponent } from './components/trustverse/framework/framework.component';
import { FitmentEvaluatorComponent } from './components/fitment-evaluator/fitment-evaluator/fitment-evaluator.component';
export const routes: Routes = [
    {
        path: 'home', component: HomeComponent, resolve: { meta: MetaResolver }, data: {
            title: 'TesQuirel',
            description: 'Welcome to TesQuirel',
            keywords: 'testing, automation, testcases, AS400 & Mainframe Testing, Web Application Testing, Mobile App Testing, API Testing',
            url: 'https://tesquirel.com/'
        }
    },
    {
        path: 'company', component: CompanyComponent, resolve: { meta: MetaResolver }, data: {
            title: 'About TesQuirel | AI Quality Engineering for Enterprise Applications',
            description: 'Learn about TesQuirel, an AI-powered Quality Engineering company helping enterprises validate modern, legacy and hybrid applications with greater speed, coverage and release confidence.',
            keywords: 'TesQuirel, TesQuirel Solutions, AI Quality Engineering company, AI testing company, enterprise test automation, AI-powered test automation, Quality Engineering platform, software testing company, enterprise AI testing,AI Quality Engineering, test automation, no-script test automation, AI test intelligence, enterprise software testing, legacy application testing, AS400 testing, mainframe testing, application quality, AI application testing, agentic AI evaluation, software quality engineering',
            url: 'https://tesquirel.com/company'
        }
    },
    {
        path: 'Platform', data: {
            title: 'Platform',
            description: 'Welcome to Our Products',
            keywords: 'tesquirel, tesquirel solutions, breez, veritai, airis, attest, sakhai'
        },
        children: [
            {
                path: 'outcomes', component: OutcomesComponent, data: {
                    title: 'TesQuirel Platform | AI-Powered Quality Engineering',
                    description: 'Meta description: TesQuirel is an AI-powered Quality Engineering platform for testing applications, business journeys and releases across web, mobile, API and legacy enterprise systems.',
                    keywords: 'powered Quality Engineering platform',
                    url: 'https://tesquirel.com/Platform/outcomes'
                }
            },
            {
                path: 'How-it-works', component: HowItWorksComponent, data: {
                    title: 'TesQuirel Works | AI-Powered Quality Engineering    ',
                    description: 'See how TesQuirel connects business intent, test intelligence, test design, no-script automation, validation, evidence and release confidence.',
                    keywords: 'attest',
                    url: 'https://tesquirel.com/Platform/How-it-works'
                }
            },
            {
                path: 'achitecture', component: AchitectureComponent, data: {
                    title: 'TesQuirel Platform Architecture | AI, Automation & Quality Engineering',
                    description: 'EExplore the TesQuirel architecture connecting business intent, test intelligence, management, automation, visual validation, execution intelligence and evidence',
                    keywords: 'TesQuirel Platform Architecture | AI, Automation & Quality Engineering',
                    url: 'https://tesquirel.com/Platform/achitecture'
                }
            },
            {
                path: 'key-capabilities', component: KeyCapabilitiesComponent, data: {
                    title: 'TesQuirel Platform Capabilities | AI, Automation & Test Intelligence',
                    description: 'Explore TesQuirel capabilities across AI test intelligence, test management, no-script automation, API, mobile, legacy, visual validation, execution insight and traceability',
                    keywords: 'veritai',
                    url: 'https://tesquirel.com/Platform/key-capabilities'
                }
            },
            {
                path: 'platform-overview', component: PlatformOverviewComponent, data: {
                    title: 'TesQuirel Business Outcomes | Release Confidence & Quality Engineering',
                    description: `See how TesQuirel helps enterprises improve release confidence, testing velocity, coverage, visibility, traceability and quality across complex application landscapes.`,
                    keywords: 'TesQuirel Business Outcomes | Release Confidence & Quality Engineering',
                    url: 'https://tesquirel.com/Platform/platform-overview'
                }
            },
        ]
    },
    {
        path: 'Solutions', data: {
            title: 'Solutions',
            description: 'Welcome to Our Products',
            keywords: 'tesquirel, tesquirel solutions, breez, veritai, airis, attest, sakhai'
        },
        children: [
            {
                path: 'test-Automation', component: TestAutomationComponent, data: {
                    title: 'Test Automation',
                    description: 'Kickstart your Test Automation journey in 5 minutes',
                    keywords: 'breez',
                    url: 'https://tesquirel.com/solutions/Test-Automation'
                }
            },
            {
                path: 'regression-Testing', component: RegressionTestingComponent, data: {
                    title: 'Regression Testing | Enterprise Regression Automation | TesQuirel',
                    description: 'Modernize regression testing with AI test intelligence, no-script automation, visual validation and execution insight across modern, legacy and hybrid applications.',
                    keywords: 'regression testing; regression test automation; automated regression testing; enterprise regression testing; AI regression testing; legacy regression testing; continuous regression testing; web regression testing; API regression testing; AS/400 regression testing',
                    url: 'https://tesquirel.com/solutions/regression-testing'
                }
            },
            {
                path: 'uat-automation', component: UatAutomationComponent, data: {
                    title: 'UAT Automation & Business Journey Testing | TesQuirel',
                    description: 'Automate UAT and end-to-end business journey validation across web, mobile, APIs and legacy systems with connected test intelligence and evidence.',
                    keywords: 'UAT automation; user acceptance testing; business journey testing; end-to-end UAT; business process testing; UAT test automation; business validation; cross-system testing; enterprise UAT; digital journey testing',
                    url: 'https://tesquirel.com/solutions/uat-automation'
                }
            },
            {
                path: 'mainframe-testing', component: MainframeTestingComponent, data: {
                    title: 'Legacy & Mainframe Testing | AS/400 Testing | TesQuirel',
                    description: 'Bring AS/400, IBM i, mainframe and legacy applications into enterprise test automation and regression coverage with TesQuirel',
                    keywords: 'legacy testing; mainframe testing; AS/400 testing; IBM i testing; AS400 test automation; mainframe test automation; legacy application testing; legacy regression testing; hybrid application testing; enterprise legacy modernization testing',
                    url: 'https://tesquirel.com/solutions/mainframe-testing  '
                }
            },
            {
                path: 'api-testing', component: ApiTestingComponent, data: {
                    title: 'API Testing & Automation | Enterprise API Quality Engineering | TesQuirel',
                    description: `Validate API payloads, authentication, chaining and service behavior as part of end-to-end enterprise testing with TesQuirel.`,
                    keywords: 'API testing; API test automation; automated API testing; REST API testing; API validation; API regression testing; service testing; API integration testing; end-to-end API testing; enterprise API quality',
                    url: 'https://tesquirel.com/solutions/api-testing'
                }
            },
            {
                path: 'mobile-testing', component: MobileTestingComponent, data: {
                    title: 'Mobile Testing & Automation | Enterprise Mobile App Testing | TesQuirel',
                    description: `Automate mobile application journeys and integrate mobile validation with API, web, visual and enterprise regression testing using TesQuirel.`,
                    keywords: 'mobile testing; mobile test automation; mobile application testing; mobile regression testing; mobile UI testing; mobile journey testing; mobile app QA; enterprise mobile testing; cross-platform mobile testing',
                    url: 'https://tesquirel.com/solutions/mobile-testing'
                }
            },
            {
                path: 'visual-testing', component: VisualTestingComponent, data: {
                    title: 'End-to-End Quality Engineering Platform | TesQuirel',
                    description: `Connect business intent, AI test intelligence, test management, automation, visual validation, execution insight and evidence across enterprise application landscapes.`,
                    keywords: 'Quality Engineering; end-to-end Quality Engineering; QE platform; AI Quality Engineering; enterprise Quality Engineering; continuous Quality Engineering; business journey validation; test intelligence; release confidence; software quality AI test automation; AI test intelligence; no-script test automation; regression testing; UAT automation; business journey testing; API testing; mobile testing; AS400 testing; IBM i testing; mainframe testing; legacy application testing; visual regression testing; UX testing; test management; test traceability; execution intelligence; AI application testing; LLM evaluation; RAG evaluation; agentic AI testing; AI governance; AI guardrails; AI evidence; AI accountability; trusted AIend-to-end quality engineering for enterprise applications; AI-powered quality engineering platform; quality engineering across legacy and modern applications; business intent to release confidence; no-script enterprise test automation; enterprise regression testing automation; UAT and business journey validation; visual and UX testing for enterprise applications; AI application testing and evaluation; trustworthy AI quality engineering',
                    url: 'https://tesquirel.com/solutions/visual-testing'
                }
            },
            {
                path: 'Ai-Testing', component: AiTestingComponent, data: {
                    title: 'Ai-Testing',
                    description: `Your friend who answers team's questions, accurately based on facts specific to your company`,
                    keywords: 'sakhai',     
                    url: 'https://tesquirel.com/solutions/mobile-testing'
                }
            },
            {
                path: 'test-management', component: TestManagementComponent, data: {
                    title: 'Test Management & Traceability | Requirements to Evidence | TesQuirel',
                    description: `Connect requirements, test scenarios, execution, defects and evidence with enterprise test management and traceability using TesQuirel.`,
                    keywords: 'test management; test traceability; requirements traceability; test case management; test lifecycle management; QA test management; test evidence; audit traceability; requirements to test traceability; enterprise test management',
                    url: 'https://tesquirel.com/solutions/test-management'
                }
            },
            {
                path: 'quality-engineering', component: QualityEngineeringComponent, data: {
                    title: 'End-to-End Qulaity Engineering',
                    description: `Your friend who answers team's questions, accurately based on facts specific to your company`,
                    keywords: 'sakhai',
                    url: 'https://tesquirel.comsolutions/quality-engineering'
                }
            }
        ]
    },
    {
        path: 'products', data: {
            title: 'Products',
            description: 'Welcome to Our Products',
            keywords: 'tesquirel, tesquirel solutions, breez, veritai, airis, attest, sakhai'
        },
        children: [
            {
                path: 'breez', component: BreezComponent, data: {
                    title: 'Breez',
                    description: 'Kickstart your Test Automation journey in 5 minutes',
                    keywords: 'breez',
                    url: 'https://tesquirel.com/products/breez'
                }
            },
            {
                path: 'attest', component: AttestComponent, data: {
                    title: 'Attest',
                    description: 'Assignment, Flow or Governance.  Your companion in Quality Journey',
                    keywords: 'attest',
                    url: 'https://tesquirel.com/products/attest'
                }
            },
            {
                path: 'airis', component: AirisComponent, data: {
                    title: 'AIris',
                    description: 'Ensure users see what you have envisaged and builds do not shift elements. Visual QA without code, at ease',
                    keywords: 'airis',
                    url: 'https://tesquirel.com/products/airis'
                }
            },
            {
                path: 'veritai', component: VeritaiComponent, data: {
                    title: 'VeritAI',
                    description: 'Empower your QA for better tasks, let GenAI generate Tests and Data',
                    keywords: 'veritai',
                    url: 'https://tesquirel.com/products/veritai'
                }
            },
            {
                path: 'sakhai', component: SakhaiComponent, data: {
                    title: 'SakhAI',
                    description: `Your friend who answers team's questions, accurately based on facts specific to your company`,
                    keywords: 'sakhai',
                    url: 'https://tesquirel.com/products/sakhai'
                }
            }
        ]
    },
    {
        path: 'industries', data: {
            title: 'Industries',
            description: 'Welcome to Our Industries',
            keywords: 'insurance, health-tech, real-estate, salesforce'
        },
        children: [
            {
                path: 'insurance', component: InsuranceComponent, data: {
                    title: 'Insurance',
                    description: 'Automate End to End Testing From Modern AI assisted Customer journeys to Legacy Core Systems',
                    keywords: 'insurance',
                    url: 'https://tesquirel.com/industries/insurance'
                }
            },
            {
                path: 'health-tech', component: HealthTechComponent, data: {
                    title: 'Health Tech',
                    description: 'Overcome your complex QA challenges in testing patient, provider and admin journeys',
                    keywords: 'health-tech',
                    url: 'https://tesquirel.com/industries/health-tech'
                }
            },
            {
                path: 'real-estate', component: RealEstateComponent, data: {
                    title: 'Real Estate',
                    description: 'Test your CRM, Rentals, availability, exploring prospect journeys across various platforms',
                    keywords: 'real-estate',
                    url: 'https://tesquirel.com/industries/real-estate'
                }
            },
            {
                path: 'salesforce', component: SalesforceComponent, data: {
                    title: 'Salesforce',
                    description: 'Enhance your Quicker workflow updates with Quality Process Testing',
                    keywords: 'salesforce',
                    url: 'https://tesquirel.com/industries/salesforce'
                }
            },
            {
                path: 'bfsi', component: BfsiComponent, data: {
                    title: 'BFSI Testing & Quality Engineering | Banking & Financial Services | TesQuirel',
                    description: 'AI-powered testing and Quality Engineering for banking and financial services. Automate business journeys across web, mobile, APIs, legacy systems and hybrid BFSI environments.',
                    keywords: 'BFSI testing, banking software testing, financial services testing, banking test automation, BFSI test automation, banking regression testing, API testing for banking, legacy banking system testing, no-script test automation, AI-powered testing, Quality Engineering BFSI',
                    url: 'https://tesquirel.com/industries/bfsi'
                }
            },
            {
                path: 'retail', component: RetailComponent, data: {
                    title: 'Banking & Financial Service',
                    description: 'Quality Release journeys across various application types, processes and validations',
                    keywords: 'banking',
                    url: 'https://tesquirel.com/industries/retail'
                }
            },
            {
                path: 'manufacturing', component: ManufacturingComponent, data: {
                    title: 'ManufacturingComponent',
                    description: 'Quality Release journeys across various application types, processes and validations',
                    keywords: 'banking',
                    url: 'https://tesquirel.com/industries/manufacturing'
                }
            },
            {
                path: 'enterprise-software', component: EnterpriseSoftwareComponent, data: {
                    title: 'Enterprise Software',
                    description: 'Quality Release journeys across various application types, processes and validations',
                    keywords: 'banking',
                    url: 'https://tesquirel.com/industries/enterprise-software'
                }
            },
            {
                path: 'manufacturing', component: ManufacturingComponent, data: {
                    title: 'ManufacturingComponent',
                    description: 'Quality Release journeys across various application types, processes and validations',
                    keywords: 'banking',
                    url: 'https://tesquirel.com/industries/manufacturing'
                }
            },
            {
                path: 'others', component: OthersComponent, data: {
                    title: 'Others',
                    description: 'Quality Release journeys across various application types, processes and validations',
                    keywords: 'others',
                    url: 'https://tesquirel.com/industries/others'
                }
            }
        ]
    },
    {
        path: 'trustverse-overview', component: TrustverseOverviewComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Our Team',
            description: 'Experienced, innovative Management Team to partner in Quality Journey',
            keywords: 'Prasad Jwalapuram, Srilakshmi Krishnamurthy, Renu Aggarwal',
            url: 'https://tesquirel.com/trustverse-overview'
        }
    },
    {
        path: 'app92-percet', component: App92PercentComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Our Team',
            description: 'Experienced, innovative Management Team to partner in Quality Journey',
            keywords: 'Prasad Jwalapuram, Srilakshmi Krishnamurthy, Renu Aggarwal',
            url: 'https://tesquirel.com/app92-percet'
        }
    },
    {
        path: 'ai-governance', component: AiTrustComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Our Team',
            description: 'Experienced, innovative Management Team to partner in Quality Journey',
            keywords: 'Prasad Jwalapuram, Srilakshmi Krishnamurthy, Renu Aggarwal',
            url: 'https://tesquirel.com/ai-governance'
        }
    },
    {
        path: 'guardrails', component: GuardrailsComponent, resolve: { meta: MetaResolver }, data: {
            title: 'AI Guardrails | Agentic AI Controls & Quality Engineering | TrustVerse',
            description: 'Explore AI guardrails as engineered controls for AI applications and agents, covering boundaries, actions, policies, exceptions and validation.',
            keywords: 'AI guardrails, LLM guardrails, agentic AI guardrails, AI safety controls, AI policy enforcement, AI testing, AI quality engineering, AI evaluation,Guardrails: Define What AI Must Never Do',
            url: 'https://tesquirel.com/guardrails'
        }
    },
    {
        path: 'evidence', component: EvidenceComponent, resolve: { meta: MetaResolver }, data: {
            title: 'AI Evidence & Decision Records | Trusted AI Quality Engineering | TrustVerse',
            description: 'Build evidence into AI Quality Engineering with traceable evaluations, decision records, guardrail events, execution results and release evidence.',
            keywords: 'AI evidence, AI audit trail, AI decision records, AI traceability, AI evaluation evidence, AI governance evidence, AI observability, trusted AI If AI Makes a Decision, Where Is the Evidence?',
            url: 'https://tesquirel.com/evidence'
        }
    },
    {
        path: 'accountability', component: AccountabilityComponent, resolve: { meta: MetaResolver }, data: {
            title: 'AI Accountability | Human Oversight & Trusted AI | TrustVerse',
            description: 'Explore accountability in AI Quality Engineering: ownership, human oversight, escalation, exceptions and evidence for consequential AI decisions.',
            keywords: 'AI accountability, AI human oversight, AI responsibility, AI governance, responsible AI, AI decision accountability, agentic AI governance AI Can Decide. Someone Still Owns the Outcome.',
            url: 'https://tesquirel.com/accountability'
        }
    },
    {
        path: 'agentic-AI', component: AgenticAiComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Agentic AI Testing & Evaluation | Guardrails, Evidence & Accountability | TrustVerse',
            description: 'A Quality Engineering approach to agentic AI covering goals, planning, tool use, guardrails, action validation, evidence and accountability.',
            keywords: 'agentic AI testing, agentic AI evaluation, AI agent testing, autonomous AI testing, AI agent guardrails, agentic AI governance, AI quality engineering Agentic AI Changes What Quality Means',
            url: 'https://tesquirel.com/agentic-AI'
        }
    },
    {
        path: 'framework', component: FrameworkComponent, resolve: { meta: MetaResolver }, data: {
            title: 'TrustVerse Framework | Trusted AI Quality Engineering & Evaluation',
            description: 'Explore the TrustVerse Framework for trusted AI Quality Engineering: intent, evaluation, guardrails, evidence, accountability, governance and continuous improvement.',
            keywords: 'TrustVerse framework, AI Quality Engineering framework, trusted AI framework, AI evaluation framework, AI governance framework, agentic AI framework, AI testing framework The TrustVerse Framework: Engineer Trust Into AI',
            url: 'https://tesquirel.com/framework'
        }
    },
    {
        path: 'team', component: TeamComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Our Team',
            description: 'Experienced, innovative Management Team to partner in Quality Journey',
            keywords: 'Prasad Jwalapuram, Srilakshmi Krishnamurthy, Renu Aggarwal',
            url: 'https://tesquirel.com/team'
        }
    },
    {
        path: 'contact', component: ContactComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Our Contact',
            description: 'Connect with us for helping you in your Quality Journey',
            keywords: 'connect@tesquirel.com, #66, 2nd Floor, Ittamadu, Banashankari 3rd Stage, Bengaluru-85',
            url: 'https://tesquirel.com/contact'
        }
    },
    {
        path: 'book-an-appointment', component: BookAnAppointmentComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Appointment',
            description: 'Welcome to TesQuirel Solutions Appointment',
            keywords: 'testing, automation'
        }
    },
    {
        path: 'success-stories', component: SuccessStoriesComponent, resolve: { meta: MetaResolver }, data: {
            title: 'Success Stories',
            description: 'Legacy ERP Automation Testing for Product re-launch, Automation Testing – Customer Onboarding, Automation Solution for a designer platform managing from smallest screw to huge cabinets, Managing A Large Operational CRM with diversified teams across organization',
            keywords: 'testing, automation, success stories',
            url: 'https://tesquirel.com/success-stories'
        }
    },
    {
        path: 'blogs', component: BlogComponent, resolve: { meta: MetaResolver }, data: {
            title: 'TesQuirel Blogs',
            description: 'Latest insights and articles on testing automation and quality assurance',
            keywords: 'blogs, testing, automation',
            url: 'https://tesquirel.com/blogs'
        },
        // children: [
        //     { path: 'list', component: BlogListComponent, canActivate: [authGuard] },
        //     { path: 'add', component: BlogAddComponent, canActivate: [authGuard] }
        // ]
    },
    {
        path: 'blog-details/:id', component: BlogDetailsComponent, resolve: { meta: MetaResolver }, data: {
            title: 'TesQuirel Blogs',
            description: 'TesQuirel Blogs',
            keywords: 'TesQuirel Blogs'
        }
    },
    {
        path: 'blog/list', component: BlogListComponent, resolve: { meta: MetaResolver }, canActivate: [authGuard], data: {
            title: 'TesQuirel Blogs',
            description: 'TesQuirel Blogs',
            keywords: 'TesQuirel Blogs'
        }
    },
    {
        path: 'blog/add', component: BlogAddComponent, resolve: { meta: MetaResolver }, canActivate: [authGuard], data: {
            title: 'TesQuirel Blogs',
            description: 'TesQuirel Blogs',
            keywords: 'TesQuirel Blogs'
        }
    },
    {
        path: 'automation-roi', component: AutomationRoiComponent
    },
    {
        path: 'automation-approach', component: AutomationApproachComponent
    },
    {
        path: 'automation-check-list', component: AutomationCheckListComponent
    },
    {
        path: 'automation-sanity', component: AutomationSanityComponent
    },
    {
        path: 'fortifai', component: FortifaiComponent
    },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent, data: { title: 'Terms' } },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: 'Privacy' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'ai-fitment-evaluatorData', component: FitmentEvaluatorComponent },
    { path: '**', component: NotFoundComponent },
];
