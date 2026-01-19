// 'use client';

// import { useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// // export function useSelectiveFocusGsap(
// //   containerRef: React.RefObject<HTMLDivElement>,
// //   enabled: boolean
// // ) {
// //   useLayoutEffect(() => {
// //     if (!containerRef.current || !enabled) return;

// //     const ctx = gsap.context((self) => {
// //       const filled = self.selector('.filled-text');
// //       const outline = self.selector('.outline-text');
// //       const image = self.selector('.image');

// //       if (!filled || !outline || !image) return;

// //       gsap.to([filled, outline], {
// //         x: 200,
// //         scrollTrigger: {
// //           trigger: filled,
// //           start: 'top bottom',
// //           end: 'bottom top',
// //           scrub: 1,
// //         },
// //       });

// //       gsap.to(image, {
// //         x: -250,
// //         scrollTrigger: {
// //           trigger: image,
// //           start: 'top bottom',
// //           end: 'bottom top',
// //           scrub: 1,
// //         },
// //       });
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, [containerRef, enabled]);
// // }



// export function useSelectiveFocusGsap(
//   containerRef: React.RefObject<HTMLDivElement | null>,
//   enabled: boolean
// ) {
//   useLayoutEffect(() => {
//     if (!containerRef.current || !enabled) return;

//     const ctx = gsap.context((self) => {
//       const filled = self.selector('.filled-text');
//       const outline = self.selector('.outline-text');
//       const image = self.selector('.image');

//       if (!filled || !outline || !image) return;

//       gsap.to([filled, outline], {
//         x: 200,
//         scrollTrigger: {
//           trigger: filled,
//           start: 'top bottom',
//           end: 'bottom top',
//           scrub: 1,
//         },
//       });

//       gsap.to(image, {
//         x: -250,
//         scrollTrigger: {
//         trigger: image,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: 1,
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [containerRef, enabled]);
// }





// import { useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export function useSelectiveFocusGsap(
//   containerRef: React.RefObject<HTMLDivElement | null>,
//   enabled: boolean
// ) {
//   useLayoutEffect(() => {
//     if (!containerRef.current || !enabled) return;

//     const q = gsap.utils.selector(containerRef.current!);

//     const ctx = gsap.context(() => {
//       const filled = q('.filled-text');
//       const outline = q('.outline-text');
//       const image = q('.image');

//       if (!filled.length || !outline.length || !image.length) return;

//       gsap.to([...filled, ...outline], {
//         x: 200,
//         scrollTrigger: {
//         //   trigger: filled[0],
//           trigger: containerRef.current!, // or '.maiin'
//           start: 'top bottom',
//           end: 'bottom top',
//           scrub: 1,
//         },
//       });

//       gsap.to(image, {
//         x: -250,
//         scrollTrigger: {
//           trigger: image[0],
//           start: 'top bottom',
//           end: 'bottom top',
//           scrub: 1,
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [containerRef, enabled]);
// }




// import { useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export function useSelectiveFocusGsap(
//   containerRef: React.RefObject<HTMLDivElement | null>,
//   enabled: boolean
// ) {
//   useLayoutEffect(() => {
//     if (!containerRef.current || !enabled) return;

//     const q = gsap.utils.selector(containerRef);

//     const ctx = gsap.context(() => {
//       const filled = q('.filled-text');
//       const outline = q('.outline-text');
//       const image = q('.image');

//       if (!filled.length || !outline.length || !image.length) return;

//       ScrollTrigger.matchMedia({
//         // DESKTOP
//         '(min-width: 769px)': () => {
//           gsap.to([...filled, ...outline], {
//             x: 200,
//             scrollTrigger: {
//               trigger: '.maiin',
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: true,
//             },
//           });

//           gsap.to(image, {
//             x: -250,
//             scrollTrigger: {
//               trigger: '.maiin',
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: true,
//             },
//           });
//         },

//         // MOBILE
//         '(max-width: 768px)': () => {
//           gsap.to([...filled, ...outline], {
//             y: 120,
//             scrollTrigger: {
//               trigger: '.maiin',
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: true,
//             },
//           });

//           gsap.to(image, {
//             y: -80,
//             scrollTrigger: {
//               trigger: '.maiin',
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: true,
//             },
//           });
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [containerRef, enabled]);
// }




import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSelectiveFocusGsap(
  containerRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean
) {
  useLayoutEffect(() => {
    if (!containerRef.current || !enabled) return;

    const q = gsap.utils.selector(containerRef);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const filled = q('.filled-text');
      const outline = q('.outline-text');
      const image = q('.image');

      if (!filled.length || !outline.length || !image.length) return;

      // DESKTOP
      mm.add('(min-width: 769px)', () => {
        gsap.to([...filled, ...outline], {
          x: 200,
          scrollTrigger: {
            trigger: '.maiin',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(image, {
          x: -250,
          scrollTrigger: {
            trigger: '.maiin',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // MOBILE
      mm.add('(max-width: 768px)', () => {
        gsap.to([...filled, ...outline], {
          y: 120,
          scrollTrigger: {
            trigger: '.maiin',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(image, {
          y: -80,
          scrollTrigger: {
            trigger: '.maiin',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => {
      mm.revert(); // 🔥 important
      ctx.revert();
    };
  }, [containerRef, enabled]);
}
