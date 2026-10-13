/**
 * Uvod pri prvom učitavanju: dva krila zavjese se razmaknu (samo CSS, u globals.css).
 * Stoji u layoutu, pa se ne ponavlja pri prelazu između stranica.
 */
export function IntroCurtain() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel" />
      <div className="intro-panel" />
      <div className="intro-seam" />
    </div>
  );
}
