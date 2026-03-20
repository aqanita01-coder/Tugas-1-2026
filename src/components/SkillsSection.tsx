import { motion } from 'framer-motion';

const skills = {
  english: [
    { name: 'Listening', level: 90 },
    { name: 'Reading', level: 85 },
    { name: 'Speaking', level: 65 },
    { name: 'Writing', level: 80 },
    { name: 'Vocabulary', level: 82 },
  ],
  science: [
    { name: 'Biologi', level: 75 },
    { name: 'Fisika', level: 85 },
    { name: 'Kimia', level: 80 },
    { name: 'Metode Ilmiah', level: 72 },
  ],
  physicalEd: [
    { name: 'Ketahanan Fisik', level: 40 },
    { name: 'Olahraga Tim', level: 35 },
    { name: 'Atletik', level: 30 },
    { name: 'Koordinasi Motorik', level: 38 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-blue-700">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Keahlian Akademik</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & Kompetensi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* English */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-display text-xl font-bold">English</h3>
            </div>
            <div className="space-y-4">
              {skills.english.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* IPA (Science) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-display text-xl font-bold">IPA</h3>
            </div>
            <div className="space-y-4">
              {skills.science.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Pendidikan Jasmani */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="font-display text-xl font-bold">Penjasorkes</h3>
            </div>
            <div className="space-y-4">
              {skills.physicalEd.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- PENAMBAHAN KRIS (DENGAN PERBAIKAN Z-INDEX) --- */}
      <motion.div 
        /* z-20 ditambahkan agar berada di atas kontainer skill yang z-10 */
        className="absolute bottom-0 right-0 md:right-10 pointer-events-none opacity-100 z-20"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.img 
          src="/asset.png" 
          alt="Kris" 
          className="w-32 md:w-48 h-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}