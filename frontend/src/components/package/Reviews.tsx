import { motion } from 'framer-motion';

interface Review {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section>
      <h2 className="text-3xl font-noto-serif text-[#EDEDED] mb-8">Guest Journals</h2>
      
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border border-[rgba(255,255,255,0.1)] object-cover" />
                <div>
                  <h4 className="text-[#EDEDED] font-bold tracking-wide">{review.name}</h4>
                  <p className="text-[#A5A5A7] text-sm mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex text-[#FFD56A] text-sm blur-[0.3px] drop-shadow-[0_0_5px_rgba(255,215,0,0.4)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined">
                      {i < Math.floor(review.rating) ? 'star' : 'star_border'}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs font-label uppercase tracking-widest text-[#FFD56A] opacity-80">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Verified Trip
                </div>
              </div>
            </div>
            
            <p className="text-[#A5A5A7] text-lg font-light leading-relaxed italic border-l-2 border-[#FFD56A]/20 pl-6">
              "{review.comment}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
