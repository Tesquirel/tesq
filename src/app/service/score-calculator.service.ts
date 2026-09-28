import { Injectable } from '@angular/core';

export interface CategoryScore {
  category: string;
  score: number;
  fitmentLevel: string;
  color: string;
  action: string;
   questionsRated?: number; 
  coverage?: string;  
}

export interface OverallResult {
  categoryScores: CategoryScore[];
  overallScore: number;
  overallFitment: string;
  recommendation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreCalculatorService {

  constructor() { }

  calculateCategoryScore(ratings: { value: number; weightage: number }[]): number {
    let totalWeighted = 0;
    let totalWeight = 0;
    
    for (const item of ratings) {
      totalWeighted += item.value * item.weightage;
      totalWeight += item.weightage;
    }
    
    return totalWeight > 0 ? totalWeighted / totalWeight : 0;
  }

  getFitmentLevel(score: number): { level: string; color: string; action: string } {
    if (score >= 4.0) {
      return { 
        level: 'Strong Fit', 
        color: '#10b981', 
        action: 'Proceed with full proposal. Prioritise this prospect for senior engagement.' 
      };
    } else if (score >= 3.0) {
      return { 
        level: 'Good Fit', 
        color: '#f59e0b', 
        action: 'Pursue with targeted gap-filling. Highlight quick wins.' 
      };
    } else if (score >= 2.0) {
      return { 
        level: 'Moderate Fit', 
        color: '#ef4444', 
        action: 'Needs enablement. Consider a discovery/POC engagement.' 
      };
    } else if (score >= 1.0) {
      return { 
        level: 'Weak Fit', 
        color: '#6b7280', 
        action: 'Significant barriers. Nurture for future pipeline.' 
      };
    } else {
      return { 
        level: 'Not Ready', 
        color: '#9ca3af', 
        action: 'Do not invest sales effort at this stage.' 
      };
    }
  }

  calculateOverall(categoryScores: CategoryScore[]): OverallResult {
    if (categoryScores.length === 0) {
      return {
        categoryScores: [],
        overallScore: 0,
        overallFitment: 'Not Ready',
        recommendation: 'Complete the evaluation first.'
      };
    }
    
    const sum = categoryScores.reduce((total, cat) => total + cat.score, 0);
    const overallScore = sum / categoryScores.length;
    const overallFitment = this.getFitmentLevel(overallScore);
    
    let recommendation = '';
    if (overallScore >= 4.0) {
      recommendation = 'Strong Fit — Proceed with full proposal. This prospect is well-positioned for AI success. Prioritise for senior engagement.';
    } else if (overallScore >= 3.0) {
      recommendation = 'Good Fit — Pursue with a targeted approach. Identify 1-2 gap areas and propose a phased roadmap or focused POC.';
    } else if (overallScore >= 2.0) {
      recommendation = 'Moderate Fit — Enablement required. Consider a discovery workshop or readiness assessment before full proposal.';
    } else {
      recommendation = 'Weak Fit — Do not invest significant sales effort now. Add to nurture track and re-evaluate in 2 quarters.';
    }
    
    return {
      categoryScores: categoryScores,
      overallScore: overallScore,
      overallFitment: overallFitment.level,
      recommendation: recommendation
    };
  }
}