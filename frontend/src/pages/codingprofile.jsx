function CodingProfile() {
  const profiles = [
    {
      name: "LeetCode",
      rating: "Your Rating",
      solved: "Your Solved Questions",
      link: "https://leetcode.com/",
    },
    {
      name: "CodeChef",
      rating: "Your Rating",
      solved: "Your Solved Questions",
      link: "https://www.codechef.com/",
    },
    {
      name: "Codeforces",
      rating: "Your Rating",
      solved: "Your Solved Questions",
      link: "https://codeforces.com/",
    },
    {
      name: "GeeksforGeeks",
      rating: "Your Rating",
      solved: "Your Solved Questions",
      link: "https://www.geeksforgeeks.org/",
    },
    {
      name: "Code360",
      rating: "Your Rating",
      solved: "Your Solved Questions",
      link: "https://www.naukri.com/code360/",
    },
  ];

  return (
    <section id="coding" className="max-w-content mx-auto px-6 md:px-10 py-20">
      <p className="text-sm font-semibold tracking-wide text-accent mb-3">
        Where I practice
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-10">
        Coding Profiles
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-xl font-bold text-ink">{profile.name}</h3>
            <p className="text-muted mt-2">{profile.rating}</p>
            <p className="text-muted">{profile.solved}</p>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:text-accentDark transition-colors mt-4"
            >
              Visit Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CodingProfile;