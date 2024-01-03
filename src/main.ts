import { run_day_1 } from "./day_1.js"

export function main() {
    let day_1_context = get_context_by_id("day-1");
    run_day_1(day_1_context);
}

function get_context_by_id(id: string): CanvasRenderingContext2D {
    let element = document.getElementById(id);
    let canvas = element as HTMLCanvasElement;
    let context = canvas.getContext("2d");
   
    return context
}

document.addEventListener('DOMContentLoaded', main)

