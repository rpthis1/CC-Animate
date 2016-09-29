using WebApiBia.Dashboard.UiControls.Layout.Container;

namespace MVC4API.Core.UIControls.Layout.Container
{
    public class UiLayoutHBox : UiLayoutBox
    {

        public UiLayoutHBox()
        {
            Type = "hbox";
            Align = "stretch";
            Pack = "start";
        }


        /* 
       * @property ALIGN
       * 
       * begin : Child items are aligned vertically at the top of the container.
       * middle : Child items are vertically centered in the container.
       * end : Child items are aligned vertically at the bottom of the container.
       * stretch : Child items are stretched vertically to fill the height of the container.
       * stretchmax : Child items are stretched vertically to the height of the largest item.
       * 
       **/


        /* 
        * @property PACK
        * 
        * start - child items are packed together at left (HBox) or top (VBox) side of container (*default**)
        * center - child items are packed together at mid-width (HBox) or mid-height (VBox) of container
        * end - child items are packed together at right (HBox) or bottom (VBox) side of container
        * 
        **/


    }
}