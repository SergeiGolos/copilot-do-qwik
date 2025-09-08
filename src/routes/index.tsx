import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute top-1/4 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-600 rounded-full opacity-25 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-10 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
      </div>

        <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div class="max-w-2xl w-full">
          {/* Main content */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/20">
            <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              🧭 Spec‑based Development with .blackboard
            </h1>
            <p class="text-xl text-white/90 mb-6 leading-relaxed">
              This app uses a spec‑first workflow powered by a .blackboard folder to design, plan, code, and validate features with task‑based agents.
            </p>

            {/* Core flow cards */}
            <div class="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🧱</div>
                <h3 class="text-white font-semibold mb-1">Design</h3>
                <p class="text-white/70 text-sm">Design Agent writes specs: <span class="font-mono">requirements.md</span>, <span class="font-mono">design.md</span>.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🗂️</div>
                <h3 class="text-white font-semibold mb-1">Plan</h3>
                <p class="text-white/70 text-sm">Plan Agent breaks work into tasks in <span class="font-mono">tasks.md</span>.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">💻</div>
                <h3 class="text-white font-semibold mb-1">Code</h3>
                <p class="text-white/70 text-sm">Code Agent implements the tasks, updates status, follows <span class="font-mono">.ground/</span> standards.</p>
              </div>
            </div>

            {/* Supporting agents */}
            <div class="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🧪</div>
                <h3 class="text-white font-semibold mb-1">Design‑Tests</h3>
                <p class="text-white/70 text-sm">Creates <span class="font-mono">testing.md</span> with acceptance criteria and coverage.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🐞</div>
                <h3 class="text-white font-semibold mb-1">Debug</h3>
                <p class="text-white/70 text-sm">Reproduces, isolates, fixes, and adds regression tests.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🔍</div>
                <h3 class="text-white font-semibold mb-1">Review</h3>
                <p class="text-white/70 text-sm">Generates structured code reviews under <span class="font-mono">review/</span>.</p>
              </div>
            </div>

            {/* .blackboard structure */}
            <div class="bg-white/10 rounded-xl p-5 text-left border border-white/10 mb-6">
              <h3 class="text-white font-semibold mb-2">.blackboard structure</h3>
              <ul class="list-disc list-inside text-white/80 text-sm space-y-1">
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/requirements.md</span> – goals & acceptance criteria</li>
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/design.md</span> – plan & architecture</li>
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/testing.md</span> – test strategy</li>
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/tasks.md</span> – ordered, atomic tasks</li>
                <li><span class="font-mono">notes/</span> – working memory and research</li>
                <li><span class="font-mono">review/</span> – structured code reviews</li>
              </ul>
              <p class="text-white/60 text-xs mt-3">Foundational standards live in <span class="font-mono">.ground/</span> (naming, coding, APIs, testing, architecture).</p>
            </div>

            {/* Workflow */}
            <div class="bg-white/5 rounded-xl p-5 text-left border border-white/5 mb-6">
              <h3 class="text-white font-semibold mb-3">Workflow</h3>
              <div class="space-y-2 text-white/80 text-sm">
                <div class="flex items-start gap-3">
                  <span class="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">Init</span>
                  <span>Bootstrap with purpose and tech</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">Research / Draw</span>
                  <span>Understand the impact area / effort / code space</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">Design</span>
                  <span>Create requirements and technical design</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">Plan</span>
                  <span>Break work into atomic, ordered tasks</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">Code</span>
                  <span>Debug and code implementation</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">Journal</span>
                  <span>Document for historical context</span>
                </div>
              </div>
            </div>

            {/* Utility helpers */}
            <div class="grid grid-cols-3 gap-3 text-left">
              <div class="bg-white/10 rounded-lg p-3 border border-white/10">
                <div class="text-lg mb-1">📚 Research</div>
                <p class="text-white/70 text-xs">Deep‑dives, findings, proposals under <span class="font-mono">notes/</span>.</p>
              </div>
              <div class="bg-white/10 rounded-lg p-3 border border-white/10">
                <div class="text-lg mb-1">🏗️ Bootstrap</div>
                <p class="text-white/70 text-xs">Seeds <span class="font-mono">.ground/</span> product, structure, tech, standards.</p>
              </div>
              <div class="bg-white/10 rounded-lg p-3 border border-white/10">
                <div class="text-lg mb-1">📝 Journal</div>
                <p class="text-white/70 text-xs">Creates external docs from specs & ground.</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-center space-x-2 text-white/80">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-lg">Specs drive the code. Tasks keep pace.</span>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-white/20">
              <p class="text-white/60">© 2025 .blackboard Workflow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Sticker - Star Repo */}
      <a
        href="https://github.com/SergeiGolos/copilot-do-qwik"
        target="_blank"
        rel="noopener noreferrer"
        class="fixed top-4 right-4 bg-yellow-400 text-black px-3 py-2 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 z-20 font-semibold text-sm"
      >
        ⭐ Star Repo
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: ".blackboard Spec Workflow",
  meta: [
    {
      name: "description",
      content: "Spec-first development using a .blackboard workflow with task-based agents for design, plan, code, test, debug, and review.",
    },
  ],
};
