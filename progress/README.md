# Progress tracking – React Jr interview readiness

## What this folder is for

This folder tracks **my progress toward being ready to apply for React Jr Dev interviews**. The goal is to keep a **realistic progress bar** and notes so that:

- **I** can see where I am and what to work on next (motivation + direction).
- **Any chat** (this one or a new one) can read the state and continue tracking without starting from zero.

**End of the bar = start applying for React Jr Dev interviews.** The bar and notes are updated based on real work: projects built, mistakes fixed, topics mastered, and gaps that still show up.

---

## How to use it (for me)

1. **Check progress:** Open `PROGRESS.md` to see current bar %, checklist, and next steps.
2. **When starting a new chat:** Tell the AI something like: *"Read the progress folder (progress/README.md and progress/PROGRESS.md) to see where I am. Continue tracking my progress there."*
3. **When we hit a milestone or fix something important:** Ask the AI to update the progress doc (e.g. *"Update my progress doc with this"* or *"Note that I fixed the handler/closure thing"*).
4. **Keep building projects** and use the doc so the bar stays realistic, not inflated.

---

## How to use it (for AI / any chat)

1. **When the user says to "continue tracking," "check my progress," or "read the progress folder":**
   - Read `progress/README.md` (this file) to understand the system.
   - Read `progress/PROGRESS.md` to see current bar %, level summary, checklist, recent notes, and next steps.

2. **When updating the bar or notes:**
   - Edit `progress/PROGRESS.md` only (do not edit this README unless the system itself changes).
   - **Bar (0–100%):** 100% = ready to apply. Be strict: base it on what the user has actually done and whether they still need hints on core patterns (handlers, closures, filter/map, state updates).
   - **Checklist:** Mark items done only when the user has done them without being corrected on the same mistake again.
   - **Recent notes:** Add short entries when we fix something important, complete a feature, or notice a recurring gap. Date in YYYY-MM-DD.
   - **Next steps:** Keep 2–4 concrete next actions so the user and the next chat know what to focus on.

3. **Scoring / bar rules (keep it realistic):**
   - Building a small app with guidance but still making handler/closure or filter-vs-map mistakes → roughly 35–45%.
   - Same app, doing handlers and immutable updates correctly without hints → move toward 55–65%.
   - Second project or take-home done cleanly + can explain patterns → 70–80%.
   - Ready to apply = bar at 85–100% (no need to be perfect; "good enough to pass a junior interview" is the bar).

---

## Files in this folder

| File           | Purpose |
|----------------|--------|
| `README.md`    | This file. Explains the system for me and for AI. |
| `PROGRESS.md`  | Current state: bar %, checklist, notes, next steps. Update this as we go. |
