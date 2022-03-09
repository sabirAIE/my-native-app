
export type Difficulty= "easy" |"hard" | "medium"

export interface Workout{
    slug:string,
    name:string,
    duration: number,
    difficulty: Difficulty,
    sequence: Array<Sequence> // or Sequence[]
}

export type WorkoutType = "stretch"|"break"|"exercise"

export interface Sequence {
    slug:string,
    name:string,
    type: WorkoutType,
    reps?:number,
    duration:number
}