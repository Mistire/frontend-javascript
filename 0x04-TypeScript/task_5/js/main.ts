export interface MajorCredits {
  credits: number;
  readonly brand: "Major";
}

export interface MinorCredits {
  credits: number;
  readonly brand: "Minor"; 
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Major" };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Minor" };
}

const math: MajorCredits = { credits: 3, brand: "Major" };
const physics: MajorCredits = { credits: 4, brand: "Major" };
console.log(sumMajorCredits(math, physics)); 

const art: MinorCredits = { credits: 2, brand: "Minor" };
const music: MinorCredits = { credits: 3, brand: "Minor" };
console.log(sumMinorCredits(art, music)); 
