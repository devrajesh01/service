import { motion } from 'framer-motion';

const DotLine = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-5 z-100  relative'>
            {/* Animated Dot */}
            <motion.div
                className='w-5 h-5 rounded-full bg-[#915EFF]'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, type: 'spring' }}
            />

            {/* Animated Line */}
            <motion.div
                className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#6E37FF] to-[#915EFF]/0'
                initial={{ height: 0 }}
                animate={{ height: '10rem' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                style={{ originY: 0 }}
            />

        </div>
    );
};

export default DotLine;
