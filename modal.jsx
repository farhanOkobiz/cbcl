// <div
//   className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
//   onClick={() => setOpen(false)}
// >
//   <div
//     className="bg-white p-4 rounded-xl shadow-xl max-w-3xl w-full relative"
//     onClick={(e) => e.stopPropagation()}
//   >
//     {/* Close button */}
//     <button
//       onClick={() => setOpen(false)}
//       className="absolute top-2 right-3 text-[#52687f] hover:text-red-700 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition"
//     >
//       ✕
//     </button>

//     {videoId ? (
//       <div className="aspect-video">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`${embedUrl}?autoplay=1`}
//           title={title}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="rounded-lg"
//         ></iframe>
//       </div>
//     ) : (
//       <p className="text-center text-gray-500 text-lg">
//         No video found for this blog.
//       </p>
//     )}
//   </div>
// </div>
