import Image from 'next/image';

const techIcons = [
  { name: "Git", src: "/icons/git.svg" },
  { name: "Github", src: "/svg/github.svg" },
  { name: "Gitlab", src: "/icons/gitlab.svg" },
  { name: "Linear", src: "/icons/linear.svg" },
  { name: "Agile", src: "/icons/agile.svg" },
  { name: "Scrum", src: "/icons/scrum.svg" },
  { name: ".NET Blazor", src: "/icons/blazor.svg" },
  { name: "MVC", src: "/icons/mvc.svg" },
  { name: "WebAPI", src: "/icons/webapi.svg" },
  { name: "Minimal API", src: "/icons/minimalapi.svg" },
  { name: "Node.js", src: "/icons/nodejs.svg" },
  { name: "Express.js", src: "/icons/express.svg" },
  { name: "NestJS", src: "/icons/nestjs.svg" },
  { name: "React", src: "/icons/react.svg" },
  { name: "Next.js", src: "/icons/nextjs.svg" },
  { name: "Remix", src: "/icons/remix.svg" },
  { name: "Vue.js", src: "/icons/vuejs.svg" },
  { name: "Nuxt.js", src: "/icons/nuxtjs.svg" },
  { name: "React Native", src: "/icons/reactnative.svg" },
  { name: "Expo", src: "/icons/expo.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "Firebase", src: "/icons/firebase.svg" },
  { name: "Document Database", src: "/icons/documentdb.svg" },
  { name: "Relational DB", src: "/icons/relationaldb.svg" },
];

export default function TechStackPage() {
  return (
    <div style={{ maxWidth: 1000, margin: 'auto', padding: 32 }}>
      <h1 style={{ fontWeight: 700, letterSpacing: 1, marginBottom: 16 }}>
        Technologies and Tools
      </h1>
      <p style={{ marginBottom: 32, fontSize: 18 }}>
        Here are a couple of Technologies and Tools I have experience with:
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {techIcons.map(icon => (
          <div key={icon.name} style={{ textAlign: 'center' }}>
            <Image src={icon.src} alt={icon.name} width={64} height={64}
              title={icon.name}
              style={{
                borderRadius: 12,
                boxShadow: '0 2px 16px rgba(60,60,80,0.12)',
                border: '1px solid #eee',
                background: '#fff'
              }} />
            <div style={{ marginTop: 8, fontSize: 12, color: '#444' }}>{icon.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
