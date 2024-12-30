import cx from 'classnames';

type IframeProps = {
  className?: string;
  noMobile?: boolean;
  src: string;
  title?: string;
};

const Iframe = ({ className, src, noMobile, title, ...other }: IframeProps) => (
  <div className={cx('relative bg-bunker pb-[60%]', className)} {...other}>
    <iframe
      className={cx(
        'absolute left-0 top-0 h-100p w-100p border-0',
        noMobile && 'hidden sm:block'
      )}
      src={src}
      title={title}
    />
    {noMobile && (
      <div
        className={cx(
          'absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-center leading-bigger',
          'sm:hidden'
        )}
      >
        <div className="overflow-auto ~p-12/20">
          <h3 className=" m-0 font-bold text-linkWater ~text-16/18">
            This iframe isn’t optimized for small screen sizes
          </h3>
          <p className="mb-0 text-manatee ~text-14/16 ~mt-8/12">
            Visit this page from a larger device.
          </p>
        </div>
      </div>
    )}
  </div>
);

export default Iframe;
