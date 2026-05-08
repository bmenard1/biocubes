/*


export const setAnimationTime = (value) => {
    for(let i = 0; i<names.length;i++){
      actions[names[i]].time = value;
      actions[names[i]].paused = true;
    }   
  }
*/
    export const playAnimations = (acts) => {
        for (const prop in acts) {
            acts[prop].play();
            acts[prop].paused = false;
        }
    }

    export const setAnimationTime = (acts, value) => {
        for (const prop in acts) {
            acts[prop].time = value;
            acts[prop].paused = true;
        }
    }