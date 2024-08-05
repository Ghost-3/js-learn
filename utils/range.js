function* range(
    start,
    stop = undefined,
    step = 1) {
    if (stop === undefined) [start, stop] = [0, start];

    const d = Math.sign(step);
    for (let i = start; d * i < d * stop; i += step) yield i;
}

export default range;