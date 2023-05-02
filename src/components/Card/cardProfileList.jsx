import { motion } from "framer-motion";

export default function CardProfileList({ profile }) {
  const cardProfile = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20 * profile.id },
  };

  return (
    <motion.div
      variants={cardProfile}
      key={profile.id}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2.5">
        <div>
          <img
            className="w-7 h-auto object-cover rounded-full sm:w-12 lg:w-14"
            src={profile.avatar}
            alt="profile"
          />
        </div>
        <div>
          <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-lg lg:mb-0.5">
            {profile.name}
          </h5>
          <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
            {profile.phone}
          </p>
        </div>
      </div>
      <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-lg">
        {profile.amount}
      </p>
    </motion.div>
  );
}
