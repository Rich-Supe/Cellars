// import { useEffect, useState } from 'react'
// import { useQuill } from 'react-quilljs';

// import 'quill/dist/quill.snow.css';

// const Quill = () => {

//     const { quill, quillRef } = useQuill();
//     const [content, setContent] = useState('')

//     // const modules = {
//     //     toolbar: [
//     //         ['bold', 'italic', 'underline', 'strike'],
//     //     ],
//     //     };
//     // const formats = ['bold', 'italic', 'underline', 'strike'];

//     console.log(`QUILLL::::`, quill);    // undefined > Quill Object
//     console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

//     const onSubmit = (e) => {
//         e.preventDefault();

//     }

//     // useEffect(() => {
//     //     if (quill) {
//     //         quill.on('text-change', () => {
//     //         console.log('Text change!');
//     //         });
//     //     }
//     //     }, [quill]);
    
//     useEffect(() => {
//         if (quill) {
//             quill.on('text-change', () => {
//                 const delta = quill.getContents()
//                 console.log(`Delta: `, delta)
//                 });
//         }
//     }, [quill])

//     return (
//         <>
//             <div style={{ width: 900, height: 250, border: '5px solid black' }}>
//                 <div ref={quillRef} />
//             </div>
//         </>
//     )
// }

// export default Quill;