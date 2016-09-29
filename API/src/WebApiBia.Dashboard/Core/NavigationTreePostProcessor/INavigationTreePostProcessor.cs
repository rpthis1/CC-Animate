namespace WebApiBia.Dashboard.Core.NavigationTreePostProcessor
{
    public interface INavigationTreePostProcessor
    {
        string Process(string data, bool onlyLeafs);
    }
}
