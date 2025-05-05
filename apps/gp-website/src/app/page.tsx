import { UiComps } from '@v3testing/ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className='p-8'>
      <h1>
        <span className='text-blue-400'> Hello there, </span>
        Welcome @v3testing/gp-website 👋
      </h1>

      <UiComps />
    </div>
  );
}
